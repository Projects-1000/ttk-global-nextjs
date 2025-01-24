export interface TagModelProps {
  // id: string;
  tag: string;
  blogAmount: number;
}

export interface BlogModelProps {
  id: string;
  title: string;
  description?: string;
  content?: string;
  // publishDate: string;
  coverImage?: string;
  tags?: TagModelProps['tag'][];
  isMainBlog: boolean;
  createdBy?: string;
  slug: string;
  createdAtIsoFormat: string;
  createdAtReadableFormat: string;
}
