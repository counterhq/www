import { test } from 'node:test';
import assert from 'node:assert/strict';
import { signupSchema, saveSignup, notifySignup } from '../lib/waitlist';
import { allowAttempt } from '../lib/rate-limit';
const signup = signupSchema.parse({ email: ' PERSON@Example.com ', company: ' Example ', role: 'agency' });
const env = { ATTIO_API_KEY: 'test', ATTIO_WAITLIST_LIST_ID: 'waitlist', RESEND_API_KEY: 'test', WAITLIST_EMAIL_FROM: 'Counter <test@example.com>', WAITLIST_EMAIL_TO: 'owner@example.com' };
const ok = (data: unknown) => Response.json({ data });
test('validates and normalizes the public form', () => {
  assert.equal(signup.email, 'person@example.com'); assert.equal(signup.company, 'Example');
  assert.equal(signupSchema.safeParse({ ...signup, email: 'invalid' }).success, false);
  assert.equal(signupSchema.safeParse({ ...signup, role: 'admin' }).success, false);
  assert.equal(signupSchema.safeParse({ ...signup, company: 'a'.repeat(201) }).success, false);
});
test('existing people are not overwritten; company and role are saved on list entry', async () => {
  const calls: { url: string; method: string; body: any }[] = [];
  const request = (async (url, init) => {
    calls.push({ url: String(url), method: init!.method!, body: JSON.parse(init!.body as string) });
    return calls.length === 1 ? ok([{ id: { record_id: 'person' } }]) : ok({ id: { entry_id: 'entry' } });
  }) as typeof fetch;
  assert.equal(await saveSignup(signup, env, request), 'entry');
  assert.equal(calls.length, 2); assert.equal(calls[1].method, 'PUT');
  assert.deepEqual(calls[1].body.data.entry_values, { signup_company: [{ value: 'Example' }], signup_role: [{ value: 'agency' }] });
});
test('creates a new person before adding them to the list', async () => {
  const methods: string[] = [];
  const request = (async (_url, init) => {
    methods.push(init!.method!);
    return methods.length === 1 ? ok([]) : methods.length === 2 ? ok({ id: { record_id: 'new' } }) : ok({ id: { entry_id: 'entry' } });
  }) as typeof fetch;
  assert.equal(await saveSignup(signup, env, request), 'entry');
  assert.deepEqual(methods, ['POST', 'POST', 'PUT']);
});
test('recovers from concurrent person creation', async () => {
  let count = 0;
  const request = (async () => {
    count++;
    return count === 1 ? ok([]) : count === 2 ? new Response('', { status: 409 }) : count === 3 ? ok([{ id: { record_id: 'person' } }]) : ok({ id: { entry_id: 'entry' } });
  }) as typeof fetch;
  assert.equal(await saveSignup(signup, env, request), 'entry'); assert.equal(count, 4);
});
test('a list failure is not reported as a saved signup', async () => {
  let count = 0;
  const request = (async () => ++count === 1 ? ok([{ id: { record_id: 'person' } }]) : new Response('', { status: 503 })) as typeof fetch;
  await assert.rejects(saveSignup(signup, env, request), /503/);
  await assert.rejects(saveSignup(signup, {}, request), /not configured/);
});
test('notification uses a stable entry id and plain text', async () => {
  const request = (async (_url, init) => {
    assert.equal(new Headers(init!.headers).get('Idempotency-Key'), 'waitlist/entry');
    const body = JSON.parse(init!.body as string);
    assert.equal(body.html, undefined); assert.match(body.text, /person@example.com/);
    return Response.json({ id: 'email' });
  }) as typeof fetch;
  await notifySignup(signup, 'entry', env, request);
  await assert.rejects(notifySignup(signup, 'entry', env, (async () => new Response('', { status: 500 })) as typeof fetch), /500/);
});
test('bounds repeated requests and resets after a minute', () => {
  for (let i = 0; i < 5; i++) assert.equal(allowAttempt('test', 1000), true);
  assert.equal(allowAttempt('test', 1000), false);
  assert.equal(allowAttempt('test', 61001), true);
});
