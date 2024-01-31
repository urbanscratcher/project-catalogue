// basics
export type Tag = {
  color?: string;
  id: string;
  name: string;
};

// default data
interface DefaultData {
  id: string;
  cover?: { url: string };
  title: string;
  description?: string;
  date: string;
}

// default pagination
interface Pagination {
  hasMore: boolean;
  nextCursor: string;
}

// data
export interface ProjectData extends DefaultData {
  slug: string;
  role: Tag[];
  techStack: Tag[];
}

export interface PaginatedProjectData extends Pagination {
  data: ProjectData[];
}

export interface DevData extends DefaultData {
  category: Tag;
  slug: string;
  tags: Tag[];
  role: Tag[];
  techStack: Tag[];
}

export interface PersonalData extends DefaultData {}

// filter
export interface DevFilter {
  category: string;
  tags: string[];
  role: string[];
  techStack: string[];
}

// page
interface DefaultPage {
  post: DefaultData;
  markdown: string;
}

export interface DevPage extends DefaultPage {
  post: DevData;
}

export interface PersonalPage extends DefaultPage {
  post: PersonalData;
}

export interface ProjectPage extends DefaultPage {
  post: ProjectData;
}
