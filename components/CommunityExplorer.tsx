'use client';

import { Globe2 } from 'lucide-react';
import { useState } from 'react';

export function CommunityExplorer({ countries }: { countries: string[] }) {
  const [selected, setSelected] = useState(countries[0]);

  return <div className="community-explorer">
    <div className="community-globe-panel" aria-label="Community map summary">
      <div className="globe-mark globe-mark-large" aria-hidden="true"><Globe2 size={156} strokeWidth={.65} />{countries.slice(0, 8).map((country, index) => <span className={`country-dot country-dot-${index + 1}`} key={country} />)}</div>
      <p className="globe-label">A community across 25 countries</p>
      <p className="selected-country" aria-live="polite">Selected: <strong>{selected}</strong></p>
    </div>
    <div className="country-picker" role="group" aria-label="Countries represented in The Mosaic">
      {countries.map(country => <button className={country === selected ? 'country-button active' : 'country-button'} type="button" key={country} aria-pressed={country === selected} onClick={() => setSelected(country)}>{country}</button>)}
    </div>
  </div>;
}
