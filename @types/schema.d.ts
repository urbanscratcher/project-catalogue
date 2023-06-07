export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  cover?: string;
  category: Tag;
  title: string;
  description?: string;
  slug: string;
  tags?: Tag[];
  role?: Tag[];
  techStack?: Tag[];
  date: string;
};

export type PostPage = {
  post: BlogPost;
  markdown: stMdStringObjectring;
};
