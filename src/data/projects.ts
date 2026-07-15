import safeherImage from '../assets/images/safeher_screenshot.png';
import cropDiseaseImage from '../assets/images/cropdisease_thumbnail.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Frontend' | 'Full Stack' | 'AIML' | 'Other';
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 'safeher',
    title: 'SafeHer',
    description:
      "A premium women's safety web application that empowers users with real-time journey tracking, instant SOS alerts, community incident reporting, and quick access to emergency contacts and help.",
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'React Router', 'Recharts', 'Motion'],
    category: 'Full Stack',
    image: safeherImage,
    githubUrl: 'https://github.com/divyanshi-katiyar/Safe_Her',
    demoUrl: 'https://safe-her-rouge.vercel.app/',
  },
  {
    id: 'emocare-chatbot',
    title: 'EmoCare Chatbot',
    description:
      'An AI-powered mental health support chatbot built with Google Gemini 2.5 Flash and TextBlob, offering empathetic, context-aware conversations. Features 5-level sentiment analysis, sentiment-based coping strategies, real-time chat, mood tracking visualization, and session summaries via an interactive Streamlit app.',
    techStack: ['Python', 'Streamlit', 'Gemini 2.5 Flash', 'TextBlob', 'Pandas'],
    category: 'AIML',
    image: 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?auto=format&fit=crop&w=800&q=80',
    githubUrl: '#', // TODO: add GitHub repo URL
    demoUrl: '#', // TODO: add live demo URL if deployed
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    description:
      'A full-stack peer-to-peer learning platform where users can teach, learn, and exchange skills. Includes personalized profiles, skill discovery with search and filters, and a request system for connecting learners with teachers.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/divyanshi-katiyar/SkillSwap',
    demoUrl: 'https://skill-swap-gamma-five.vercel.app',
  },
  {
    id: 'krishimadad',
    title: 'Krishimadad',
    description:
      'An AI-based crop disease detection platform using a CNN to classify 38 plant disease categories from the PlantVillage dataset, achieving 88% validation accuracy. Built as a Flask web app for real-time leaf image upload and prediction, with added weather updates, agricultural news, multilingual support, and voice assistance for accessibility.',
    techStack: ['Python', 'TensorFlow', 'CNN', 'Flask'],
    category: 'AIML',
    image: cropDiseaseImage,
    githubUrl: 'https://github.com/divyanshi-katiyar/Crop-Disease-Detection-System',
    demoUrl: '#',
  },
];
