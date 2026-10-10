import { site } from '@/data/site';
export default function ContactPage(){return <div className="page-shell plain-content"><h1>Contact</h1><p>We would love to hear from you. For questions about The Mosaic, our focus areas, or becoming involved, please reach out.</p><p><a href={`mailto:${site.email}`}>{site.email}</a></p><p>Find us on <a href={site.social.linkedin}>LinkedIn</a>.</p></div>}
