'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/data/navigation';
import { site } from '@/data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="member-banner">Become a member <a href={site.membershipUrl}>here</a> !</div>
    <div className="nav-wrap">
      <Link className="wordmark" href="/">The Mosaic</Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <Link href={item.href} key={item.label}>{item.label}</Link>)}
      </nav>
      <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">{navigation.map(item => <div key={item.label}><Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link></div>)}</nav>}
  </header>;
}
