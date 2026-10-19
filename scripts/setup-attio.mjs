// Run once using an admin token with list_configuration:read-write.
const { ATTIO_API_KEY, ATTIO_WAITLIST_LIST_ID } = process.env;
if (!ATTIO_API_KEY || !ATTIO_WAITLIST_LIST_ID) throw new Error('Set ATTIO_API_KEY and ATTIO_WAITLIST_LIST_ID');
const base = `https://api.attio.com/v2/lists/${encodeURIComponent(ATTIO_WAITLIST_LIST_ID)}`;
async function api(path, options = {}) {
  const response = await fetch(base + path, { ...options, headers: { Authorization: `Bearer ${ATTIO_API_KEY}`, 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`Attio setup failed (${response.status})`);
  return response.json();
}
const { data: list } = await api('');
if (!list.parent_object?.includes('people')) throw new Error('The waitlist must accept People records');
const { data: attributes } = await api('/attributes');
for (const [api_slug, title] of [['signup_company', 'Signup company'], ['signup_role', 'Signup role']]) {
  const existing = attributes.find(attribute => attribute.api_slug === api_slug);
  if (existing) {
    if (existing.type !== 'text' || existing.is_multiselect || existing.is_archived) throw new Error(`Incompatible attribute: ${api_slug}`);
    console.log(`${api_slug}: already configured`); continue;
  }
  await api('/attributes', { method: 'POST', body: JSON.stringify({ data: { title, api_slug, type: 'text', description: 'Provided on the Counter waitlist form.', is_required: false, is_unique: false, is_multiselect: false, config: {} } }) });
  console.log(`${api_slug}: created`);
}
