export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
};

export const projects: Project[] = [
  {
    slug: 'institute-of-chinese-culture',
    title: 'Institute of Chinese Culture',
    shortTitle: 'ICC',
    description: "The Institute of Chinese Culture (ICC) was incorporated in Texas in 1970 as a non-profit educational institution and is Houston's first Chinese language school. Their mission is to enhance the appreciation of the Chinese language and culture through their Chinese-language school and a variety of community activities throughout the year.",
    detail: 'A nonprofit educational institution dedicated to Chinese language learning and cultural appreciation in Houston.',
  },
  {
    slug: 'bridges-between-cultures',
    title: 'Bridge Between Cultures',
    shortTitle: 'BBC',
    description: 'Bridge Between Cultures (BBC) is an international project to reduce language barriers and spread English education to non-urban China. They are not only connecting children across the ocean but also decreasing the education resource disparity in China.',
    detail: 'An international project working to make English education and cross-cultural connection more accessible.',
  },
  {
    slug: 'comon',
    title: 'College and Olympiad Math Online Network',
    shortTitle: 'COMON',
    description: 'The College and Olympiad Math Online Network (COMON) is an international community where mathematicians of all ages can gather, communicate, and learn. They create handouts, have problem collections, and host an annual sponsored math competition.',
    detail: 'An international mathematics community for learning, problem solving, and competition.',
  },
  {
    slug: 'institute-of-hispanic-culture-houston',
    title: 'Institute of Hispanic Culture Houston',
    shortTitle: 'IHCH',
    description: 'The Institute of Hispanic Culture of Houston (IHCH) is a non-profit organization founded in 1965 by a group of professionals living in Houston that joined together to preserve and disseminate the richness & values of Hispanic Culture with the community of Houston, TX. IHCH serves the community by providing different educational, cultural and networking activities and merit-based scholarships.',
    detail: 'A Houston nonprofit preserving and sharing the richness of Hispanic culture through education, community, and scholarships.',
  },
];
