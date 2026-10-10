export type BlogPost = { slug: string; title: string; author: string; date: string; readTime: string; excerpt: string; pdfPage: number };

export const blogPosts: BlogPost[] = [
  { slug: 'invisible-disabilities', title: 'Invisible Disabilities', author: 'Sudiksha Aalori', date: 'February 9, 2026', readTime: '3 min read', pdfPage: 2, excerpt: 'A reflection on palmar hyperhidrosis, the accommodations that make daily life possible, and the compassion we can offer when another person’s challenges are not visible.' },
  { slug: 'literacy', title: 'Literacy', author: 'Nelly Awad', date: 'January 30, 2026', readTime: '2 min read', pdfPage: 7, excerpt: 'Words are the channel of ideas; language is the essence of communication. A personal reflection on bilingualism, writing, and the gift of literacy.' },
  { slug: 'matcha', title: 'Matcha', author: 'Naledi Khumalo', date: 'January 19, 2026', readTime: '3 min read', pdfPage: 11, excerpt: 'A meditation on changing tastes, family traditions, friendship, and the cultural history behind a favorite drink.' },
  { slug: 'modern-femininity', title: 'Modern Femininity', author: 'Hari Nair', date: 'October 30, 2025', readTime: '3 min read', pdfPage: 23, excerpt: 'A reflection on finding a louder voice, embracing vulnerability, and learning to be heard through community.' },
];
