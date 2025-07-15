export interface ProjectDescription {
  short?: string;
  detailed?: string;
  media?: string[];
}

export interface Project {
  title: string;
  description: ProjectDescription;
  demoURL: string;
  repoURL: string;
  mediaURLs: string[]|string;
}

export interface Content {
  name: string;
  profileImg: string;
  title: string;
  tagLine: string;
  about: string;
  projects: Record<string, Project>;
}
export interface Social {
  name: string;
  url: string;
}
export interface Person{
  firstName: string;
  lastName: string;
  title: string;
  tagLine: string;
  description: string;
  profilePic: string;
  projects: Record<string,Project>;
  socials: Social[]
}

