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
  description: string;
}

export type Experiences = {
    title: string;
    description: string;
    timeframe: string;
    location: string;
}

export type Diplomas = {
    title: string;
    description: string
}