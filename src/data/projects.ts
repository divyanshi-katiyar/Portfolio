import safeherImage from '../assets/images/safeher_screenshot.png';
import cropDiseaseImage from '../assets/images/cropdisease_thumbnail.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Frontend' | 'Full Stack' | 'Other';
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
      'A mental health support chatbot with a conversational chat interface, built on the Gemini 2.5 Flash model. It performs sentiment analysis on user messages, tracks mood over time, offers personalized coping strategies, and surfaces crisis-support resources when needed.',
    techStack: ['Python', 'Streamlit', 'Gemini API', 'TextBlob', 'Pandas'],
    category: 'Other',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80', // TODO: replace with a real screenshot
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
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', // TODO: replace with a real screenshot
    githubUrl: 'https://github.com/divyanshi-katiyar/SkillSwap',
    demoUrl: 'https://skill-swap-gamma-five.vercel.app',
  },
  {
    id: 'crop-disease-detection',
    title: 'Crop Disease Detection System (KrishiMadd)',
    description:
      'An academic (EPICS) project that classifies crop leaf diseases from images using a MobileNetV2 model trained on the PlantVillage dataset, helping farmers identify plant health issues early.',
    techStack: ['Python', 'TensorFlow/Keras', 'MobileNetV2', 'PlantVillage Dataset'],
    category: 'Other',
    image: cropDiseaseImage,
    githubUrl: 'https://github.com/divyanshi-katiyar/Crop-Disease-Detection-System',
    demoUrl: '#',
  },
];

