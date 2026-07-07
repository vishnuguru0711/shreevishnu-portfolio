export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Projects Completed', value: 4 },
  { label: 'Certifications', value: 4 },
  { label: 'Internships', value: 1 },
  { label: 'Technologies Learned', value: 12 },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java'],
  },
  {
    title: 'Frameworks',
    skills: ['Flask', 'FastAPI', 'Flutter', 'TensorFlow'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB'],
  },
  {
    title: 'Cloud',
    skills: ['Microsoft Azure'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'NMP', 'Android Compose'],
  },
  {
    title: 'AI & ML',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Context Engineering & RAG',
    ],
  },
];

export const projects = [
  {
    title: 'Smart Assistive Stick for Visually Impaired Individuals',
    description:
      'An ESP32-CAM and Flutter-powered assistive device that combines real-time object detection with voice-driven navigation and emergency alerts.',
    features: [
      'AI Voice Assistant',
      'TensorFlow Lite Object Detection',
      'Google Maps Voice Navigation',
      'GPS Tracking',
      'SOS Alert System',
      'Voice Commands',
    ],
    tech: ['Python', 'TensorFlow Lite', 'Flutter', 'ESP32-CAM'],
    links: { demo: '#', github: 'https://github.com/vishnuguru0711/blind-manproject', caseStudy: '#' },
  },
  {
    title: 'AI Chatbot for Document Extraction',
    description:
      'An intelligent chatbot built using Python and Flask that extracts information from documents and answers natural language queries.',
    features: [],
    tech: ['Python', 'Flask', 'NLP', 'MongoDB'],
    links: { demo: '#', github: 'https://github.com/vishnuguru0711/AI-driven-customercare' },
  },
  {
    title: 'AI-Based Solar Panel Optimization',
    description:
      'A machine learning model that predicts optimal solar panel orientation to maximize energy generation throughout the day.',
    features: [],
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Visualization'],
    links: { github: 'https://github.com/vishnuguru0711/Changing-Solarpanel-direction-by-predicting-sun-', docs: '#' },
  },
  {
    title: 'Emotion-Aware Music Recommendation System',
    description:
      'Built during the Infosys Springboard AI Internship, this system detects listener emotion and recommends tracks tailored to their mood.',
    features: [],
    tech: ['Emotion Detection', 'Recommendation Engine', 'Machine Learning', 'Python'],
    links: { github: '#', docs: '#' },
  },
];

export const experience = [
  {
    company: 'Infosys Springboard',
    role: 'Artificial Intelligence Intern',
    period: '2025',
    points: [
      'Developed an Emotion-Aware Music Recommendation System',
      'Built and trained machine learning models',
      'Handled data preprocessing and feature engineering',
      'Designed the recommendation engine logic',
      'Evaluated model performance and iterated on accuracy',
    ],
  },
];

export const certifications = [
  { name: 'Microsoft Azure Fundamentals', year: '2024', issuer: 'Microsoft' },
  { name: 'Google Android Basics with Compose', year: '2024', issuer: 'Google' },
  { name: 'MongoDB Introduction for Students', year: '2024', issuer: 'MongoDB' },
  { name: 'Artificial Intelligence Internship', year: '2025', issuer: 'Infosys Springboard' },
];

export const education = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Manakula Vinayagar Institute of Technology',
    detail: 'CGPA: 7.08',
    period: '2022 – 2026',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'N.A.Annaparaja.Hr.Sec.School',
    detail: '83%',
    period: '2021-2022',
  },
  {
    degree: 'SSLC (10th)',
    institution: 'P.A.C.M.Hr.Sec.School',
    detail: '71%',
    period: '2019-2020',
  },
];

export const contactInfo = {
  email: 'shreevishnu0711@gmail.com',
  phone: '+91 8681071974',
  github: "https://github.com/vishnuguru0711",
  linkedin: "https://www.linkedin.com/in/shreevishnu-k-9a8a08374",
  location: 'Rajapalayam , Tamilnadu, India',
};
