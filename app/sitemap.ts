import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://www.themosaic.org'; return ['','about','projects-6','blog','members','contact',...projects.map(p=>p.slug)].map(path => ({ url: `${base}/${path}`, lastModified: new Date('2026-10-09') })); }
