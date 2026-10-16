export type ResumeEntryData = {
  title: string
  subtitle?: string
  date?: string
  href?: string
  logo?: string
  linkColor?: 'flappy' | 'garnet'
  description?: string
  highlights?: string[]
}

export const projects: ResumeEntryData[] = [
  {
    title: 'FlappyLetters.com',
    description: 'A daily word game blending Wordle-style guessing with Flappy Bird-inspired flight.',
    href: 'https://flappyletters.com',
    logo: '/flappyletters-logo.svg',
    linkColor: 'flappy',
  },
]

export const experienceEntries: ResumeEntryData[] = [
  {
    title: 'Software Engineer - Solution Analyst',
    subtitle: 'Deloitte',
    logo: '/icons/deloitte-mark.svg',
    date: 'August 2025 – Present',
    highlights: [
      'Developed enterprise-level software for Fortune 500 companies and state governments.',
      'Engineered REST API endpoints that reduced manual data entry by about 15 hours per week.',
      'Resolved 100+ bugs and defects across microservices.',
    ],
  },
  {
    title: 'Computer Science Teacher',
    subtitle: 'Christopher Columbus High School',
    logo: '/icons/columbus-c.svg',
    date: 'January – July 2025',
    highlights: [
      'Instructed 100+ computer science students across 6 classes.',
      'Boosted average AP exam scores by over 7%.',
      'Created 20+ interactive programming projects for classroom use.',
    ],
  },
]

export const educationEntries: ResumeEntryData[] = [
  {
    title: 'Bachelor of Arts in Computer Science',
    subtitle: 'Florida State University',
    date: 'July 2021 – December 2024',
    href: '/fsu_degree.png',
    logo: '/icons/fsu-wordmark.svg',
    linkColor: 'garnet',
    highlights: ['Minor in General Business'],
  },
]
