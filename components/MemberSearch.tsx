'use client';

import { useMemo, useState } from 'react';

export function MemberSearch({ members }: { members: string[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => members.filter(member => member.toLowerCase().includes(query.toLowerCase().trim())), [members, query]);

  return <>
    <div className="member-search"><label htmlFor="member-search-input">Find a member</label><input id="member-search-input" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by name" /></div>
    {filtered.length ? <div className="member-list">{filtered.map(member => <span key={member}>{member}</span>)}</div> : <p className="member-empty">No members match “{query}”.</p>}
  </>;
}
