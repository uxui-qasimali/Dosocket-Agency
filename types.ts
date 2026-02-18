export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
}