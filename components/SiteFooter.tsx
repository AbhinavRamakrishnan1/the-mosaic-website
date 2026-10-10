import { Instagram, Linkedin } from 'lucide-react';
import { site } from '@/data/site';

export function SiteFooter() { return <footer className="site-footer"><div className="footer-inner"><a className="email" href={`mailto:${site.email}`}>{site.email}</a><div className="socials"><a href={site.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a><a href={site.social.instagram} aria-label="Instagram"><Instagram size={18} /></a></div><span>©2026 by The Mosaic.</span></div></footer>; }
