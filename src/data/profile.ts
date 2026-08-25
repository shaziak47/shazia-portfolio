import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  LineChart,
  Sparkles,
  Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Shazia Parveen',
  shortName: 'Shazia Parveen',
  title: 'Senior Software Engineer',
  tagline:
    'Data Engineering · Machine Learning · Cloud · Full-Stack',
  bio: 'I architect scalable data pipelines, machine learning systems, and cloud-native applications. With experience across pharma, fintech, and enterprise SaaS, I help teams turn complex data into actionable products.',
  email: 'zk778046@gmail.com',
  phone: '03064617510',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/shazia-parveen-010068431/',
  fiverrRating: 4.8,
  fiverrReviews: 85,
  fiverrLevel: 'Level 2 Seller',
  hourlyRate: '$20/hr',
}

export type Service = {
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
}

export const services: Service[] = [
  {
    title: 'Python Web & Desktop Apps',
    description:
      'Custom Django, Flask, and React applications — from MVPs to production-grade platforms with REST APIs and modern UI.',
    icon: Code2,
    tags: ['Django', 'Flask', 'React', 'REST APIs'],
  },
  {
    title: 'AI SaaS & Software',
    description:
      'End-to-end AI products: chatbots, LLM integrations, predictive models, and intelligent automation for your business.',
    icon: Brain,
    tags: ['OpenAI', 'TensorFlow', 'ML Pipelines', 'SaaS'],
  },
  {
    title: 'Web Scraping & Automation Bots',
    description:
      'Reliable data extraction, Selenium automation, and workflow bots that save hours of manual work every week.',
    icon: Bot,
    tags: ['Selenium', 'Python', 'ETL', 'Automation'],
  },
  {
    title: 'Data Engineering & ETL',
    description:
      'Large-scale pipelines on AWS EMR, Azure Data Factory, and PySpark — built for pharma, analytics, and research.',
    icon: Database,
    tags: ['AWS EMR', 'PySpark', 'MongoDB', 'Redshift'],
  },
  {
    title: 'Cloud & Microservices',
    description:
      'Scalable backends with AWS Lambda, S3, Docker, and microservice architectures designed for high availability.',
    icon: Cloud,
    tags: ['AWS', 'Lambda', 'Docker', 'CI/CD'],
  },
  {
    title: 'Full-Stack Consulting',
    description:
      'Architecture reviews, tech stack selection, and hands-on delivery for startups and enterprise teams.',
    icon: Layers,
    tags: ['Agile', 'System Design', 'Team Lead', 'Mentoring'],
  },
]

export type SkillGroup = {
  category: string
  level: 'Expert' | 'Advanced' | 'Proficient'
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data & ML',
    level: 'Expert',
    skills: [
      'Python',
      'PySpark',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'Data Mining',
      'YOLOv5',
      'Jupyter',
    ],
  },
  {
    category: 'Cloud & Big Data',
    level: 'Expert',
    skills: [
      'AWS EMR',
      'AWS Lambda',
      'AWS Redshift',
      'S3',
      'Azure Data Factory',
      'GCP',
      'MongoDB',
      'Redis',
    ],
  },
  {
    category: 'Backend & APIs',
    level: 'Advanced',
    skills: [
      'Django',
      'Flask',
      'FastAPI',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'REST',
      'GraphQL',
    ],
  },
  {
    category: 'Frontend',
    level: 'Advanced',
    skills: ['React', 'TypeScript', 'Angular', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'DevOps & Tools',
    level: 'Proficient',
    skills: [
      'Docker',
      'CI/CD',
      'Git',
      'Salesforce',
      'Stripe',
      'DocuSign',
      'SSO',
      'Agile',
    ],
  },
  {
    category: 'Languages',
    level: 'Advanced',
    skills: ['Python', 'Java', 'Scala', 'TypeScript', 'JavaScript'],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  category: 'Freelance' | 'Enterprise' | 'Research' | 'Platform'
  source: 'Fiverr' | 'Upwork' | 'Resume' | 'Client'
  featured?: boolean
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'Pharma Data ETL Platform',
    description:
      'Engineered and optimized ETL pipelines on AWS EMR and MongoDB for large-scale pharmaceutical data. Integrated Azure Data Factory for automated ingestion and built PySpark notebooks delivering insights for doctors and researchers.',
    tags: ['AWS EMR', 'PySpark', 'Azure Data Factory', 'MongoDB'],
    category: 'Enterprise',
    source: 'Resume',
    featured: true,
    gradient: 'from-pink-500/20 to-rose-600/20',
  },
  {
    title: 'ML Skin Lesion Classifier',
    description:
      'Published research on skin lesion classification using deep learning techniques, achieving high accuracy rates with TensorFlow and advanced CNN architectures.',
    tags: ['TensorFlow', 'Deep Learning', 'Computer Vision', 'Research'],
    category: 'Research',
    source: 'Resume',
    featured: true,
    gradient: 'from-violet-500/20 to-fuchsia-600/20',
  },
  {
    title: 'AI SaaS & Chatbot Platform',
    description:
      'Built AI-driven SaaS products for clients on Fiverr — custom bots, LLM integrations, and intelligent automation workflows from concept to deployment.',
    tags: ['OpenAI', 'SaaS', 'Python', 'React'],
    category: 'Freelance',
    source: 'Fiverr',
    featured: true,
    gradient: 'from-emerald-500/20 to-teal-600/20',
  },
  {
    title: 'Reinforcement Learning Pipelines',
    description:
      'Developed and optimized RL training pipelines at Turing — implementing preprocessing, model evaluation, and decision-making workflows for AI-driven systems.',
    tags: ['Python', 'RL', 'ML Ops', 'AI Systems'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-amber-500/20 to-orange-600/20',
  },
  {
    title: 'Redshift Data Warehouse',
    description:
      'Designed scalable data models on AWS Redshift at 10Pearls, optimizing storage and retrieval for high-volume applications with Pandas and PySpark processing.',
    tags: ['AWS Redshift', 'PySpark', 'Pandas', 'Data Modeling'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-pink-400/20 to-fuchsia-600/20',
  },
  {
    title: 'Computer Vision Pipeline',
    description:
      'Implemented YOLOv5-based computer vision tasks integrated with data pipelines, improving processing speed and accuracy for enterprise ML workloads.',
    tags: ['YOLOv5', 'Computer Vision', 'PySpark', 'Flask'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-rose-500/20 to-pink-600/20',
  },
  {
    title: 'Email Monetization Chrome Extension',
    description:
      'Developed a Chrome extension with Stripe and GCP payment integration, AWS Lambda backends, and secure SSO — handling heavy loads in production.',
    tags: ['Chrome Extension', 'Stripe', 'AWS Lambda', 'Node.js'],
    category: 'Platform',
    source: 'Resume',
    gradient: 'from-lime-500/20 to-green-600/20',
  },
  {
    title: 'Marketing Automation Backend',
    description:
      'Built Flask-RESTX microservices at Tkxel integrating Salesforce, PySpark audience targeting, OCR, and DocuSign for end-to-end marketing workflows.',
    tags: ['Flask', 'Salesforce', 'PySpark', 'DocuSign'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-purple-500/20 to-violet-600/20',
  },
  {
    title: 'Cloud SaaS Application',
    description:
      'Developed and maintained a cloud-based SaaS platform for Gerog Mentz GmbH (Germany) with AWS S3, Lambda, and efficient data engineering practices.',
    tags: ['AWS', 'SaaS', 'Python', 'Cloud'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-rose-500/20 to-pink-700/20',
  },
  {
    title: 'Enterprise Microservices Suite',
    description:
      'Built Spring Boot microservices at Nakisa with Angular/Vue frontends, CI/CD automation, and modular architecture for enterprise-grade applications.',
    tags: ['Spring Boot', 'Angular', 'Vue.js', 'CI/CD'],
    category: 'Enterprise',
    source: 'Resume',
    gradient: 'from-fuchsia-500/20 to-pink-600/20',
  },
  {
    title: 'Python Web Scraping Bots',
    description:
      'Delivered 75+ Fiverr projects building custom scrapers, automation bots, and data extraction tools for clients worldwide with 4.8★ rating.',
    tags: ['Selenium', 'Python', 'Automation', 'Bots'],
    category: 'Freelance',
    source: 'Fiverr',
    gradient: 'from-yellow-500/20 to-amber-600/20',
  },
  {
    title: 'Full-Stack Client Applications',
    description:
      'End-to-end web and desktop applications for Upwork and Fiverr clients — Django/Flask backends, React frontends, and production deployments.',
    tags: ['Django', 'React', 'PostgreSQL', 'Deployment'],
    category: 'Freelance',
    source: 'Upwork',
    gradient: 'from-pink-500/20 to-rose-700/20',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location?: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'QPharma',
    period: 'Jan 2024 — Present',
    location: 'Remote',
    highlights: [
      'Engineered ETL pipelines on AWS EMR and MongoDB for pharmaceutical data at scale',
      'Automated data collection with Azure Data Factory across multiple sources',
      'Built predictive models and PySpark notebooks for research insights',
      'Reduced manual data handling through automated big data workflows',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Turing',
    period: 'Jun 2025 — Sep 2025',
    location: 'Remote',
    highlights: [
      'Developed reinforcement learning pipelines with training workflows and model evaluation',
      'Implemented data preprocessing for AI-driven decision-making systems',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: '10Pearls',
    period: 'Jan 2022 — Present',
    location: 'Lahore, Pakistan',
    highlights: [
      'Designed scalable data models on AWS Redshift for high-volume applications',
      'Led a team delivering ML and web services with Flask, Django, and AWS',
      'Applied YOLOv5 for computer vision and PySpark for data processing',
      'Practiced Agile methodologies with cross-functional client collaboration',
    ],
  },
  {
    role: 'Software Engineer (Contract)',
    company: 'Gerog Mentz GmbH',
    period: 'Mar 2022 — Sep 2022',
    location: 'Germany',
    highlights: [
      'Developed cloud-based SaaS with AWS S3 and Lambda integration',
      'Implemented features based on client requirements with data engineering best practices',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tkxel',
    period: 'Jan 2021 — Jan 2022',
    location: 'Lahore, Pakistan',
    highlights: [
      'Built Flask-RESTX backends integrating Salesforce and marketing tools',
      'Developed Chrome extension with Stripe payment gateways and AWS Lambda',
      'Implemented OCR, DocuSign, and SSO for secure document workflows',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Nakisa',
    period: 'Jan 2019 — Jan 2021',
    location: 'Lahore, Pakistan',
    highlights: [
      'Developed enterprise apps with Spring Boot, Angular, and Vue.js',
      'Built microservices architecture with automated CI/CD deployment pipelines',
    ],
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'National University of Computer & Emerging Sciences (FAST-NUCES)',
  period: 'Aug 2015 — May 2019',
  location: 'Lahore, Pakistan',
}

export const achievements = [
  {
    title: 'Research Publication',
    description:
      'Published research on skin lesion classification using deep learning with high accuracy rates.',
    icon: Sparkles,
  },
  {
    title: 'Fiverr Level 2 Seller',
    description: '4.8★ rating across 85+ reviews — trusted by clients worldwide for Python and AI work.',
    icon: Globe,
  },
  {
    title: 'Team Leadership',
    description:
      'Led engineering teams at 10Pearls delivering ML, data science, and full-stack solutions on AWS.',
    icon: Workflow,
  },
  {
    title: 'Pharma Data Expertise',
    description:
      'Specialized experience building data pipelines and ML models for pharmaceutical research.',
    icon: LineChart,
  },
]

export const testimonials = [
  {
    text: 'Very good and easy to work with — my favorite developer. He understands programming, databases, and web architectures very easily.',
    author: 'Fiverr Client',
  },
  {
    text: 'He is the best Python programmer I have come across on this platform! He solved all my problems and knows exactly what he is doing.',
    author: 'Fiverr Client',
  },
  {
    text: 'Loved the work from the beginning — he made it easy to get through the project and went above and beyond to complete it.',
    author: 'Fiverr Client',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
