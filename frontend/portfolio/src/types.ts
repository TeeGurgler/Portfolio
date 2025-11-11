export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
  tags: string[];
  featured: boolean;
}

export type Skill = {
  title: string;
  category: string;
  icon_url?: string;
}

export type Experience = {
    title: string;
    description: string;
    timeframe: string;
    location: string;
}

export type Diploma = {
    title: string;
    description: string;
    category: string;
}

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  url?: string;
}