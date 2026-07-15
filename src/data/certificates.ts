import courseraNetworkingImg from '../assets/images/cert_coursera_networking.png';
import nptelMlImg from '../assets/images/cert_nptel_ml.png';
import nptelMarketingImg from '../assets/images/cert_nptel_marketing.png';
import azureDataImg from '../assets/images/cert_azure_data.png';
import ibmGenAiImg from '../assets/images/cert_ibm_genai.png';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: 'coursera-networking',
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google (via Coursera)',
    issueDate: 'November 2024',
    image: courseraNetworkingImg,
    credentialUrl: 'https://coursera.org/verify/EL39JM8Q89UE',
    description: 'An online non-credit course covering the fundamentals of computer networking, authorized by Google.',
  },
  {
    id: 'nptel-machine-learning',
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    issueDate: 'April 2025',
    image: nptelMlImg,
    credentialUrl: 'https://nptel.ac.in',
    description: '12-week NPTEL course on the foundations of machine learning, completed with a score of 72/100 (Roll No: NPTEL25CS46S448700331).',
  },
  {
    id: 'azure-data-fundamentals',
    title: 'MicroSoft Azure Data Fundamentals',
    issuer: 'Microsoft (Certiport)',
    issueDate: 'June 2025',
    image: azureDataImg,
    credentialUrl: 'https://verify.certiport.com',
    description: 'Certified in core data concepts and how they are implemented using Microsoft Azure data services.',
  },
  {
    id: 'ibm-genai-cloud',
    title: 'IBM Gen AI',
    issuer: 'IBM SkillsBuild',
    issueDate: 'June 2025',
    image: ibmGenAiImg,
    credentialUrl: '#',
    description: 'Explored how generative AI is shaping the future of cloud computing, as part of the IBM SkillsBuild program.',
  },
  {
    id: 'nptel-marketing-analytics',
    title: 'Marketing Analytics',
    issuer: 'NPTEL',
    issueDate: 'April 2026',
    image: nptelMarketingImg,
    credentialUrl: 'https://nptel.ac.in',
    description: '12-week NPTEL course on marketing analytics, completed with a score of 99/100 (Roll No: NPTEL26MG33S952404608).',
  },
];
