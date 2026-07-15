export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description?: string;
  courses?: string[];
}

export const educationList: EducationItem[] = [
  {
    id: '1',
    degree: 'B.Tech in Computer Science',
    institution: 'VIT Bhopal University',
    duration: '2023 - 2027',
    grade: '', // Placeholder: add your CGPA here when ready (e.g., 'CGPA: 9.0/10')
    description: 'Focusing on core computer science fundamentals, interactive programming paradigms, and modern software development.',
    courses: [
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management Systems',
      'Web Development'
    ]
  }
];
