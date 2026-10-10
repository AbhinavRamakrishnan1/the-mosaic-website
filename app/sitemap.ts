import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://the-mosaic.vercel.app'; return ['','about','focus','blog','members','contact','submit',...projects.map(p=>p.slug)].map(path => ({ url: `${base}/${path}`, lastModified: new Date('2026-10-10') })); }
