export interface Socials {
  email: string;
  phone?: string;
  location?: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  codechef?: string;
  hackerrank?: string;
}

export const socials: Socials = {
  email: 'divi.katiyar0435@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  leetcode: '', // Empty means hidden until provided
  codechef: '',
  hackerrank: ''
};
