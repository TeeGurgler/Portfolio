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
}

export type Experience = {
    title: string;
    description: string;
    timeframe: string;
    location: string;
}

export type Diploma = {
    title: string;
    description: string
}