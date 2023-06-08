interface Tag {
  color: string;
  id: string;
  name: string;
}

interface Post {
  id: string;
  cover?: string;
  title: string;
  description?: string;
  date: string;
}

export interface DevPost extends Post {
  category: Tag;
  slug: string;
  tags?: Tag[];
  role?: Tag[];
  techStack?: Tag[];
}

export interface DevPostFilter {
  category: string;
  tags: string[];
  role: string[];
  techStack: string[];
}

export interface PersonalPost extends Post {}

export interface DevPostPage {
  post: DevPost;
  markdown: string;
}

export interface PersonalPostPage {
  post: PersonalPost;
  markdown: string;
}
