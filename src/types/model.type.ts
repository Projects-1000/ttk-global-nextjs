import { ImageProps } from 'next/image';

export interface TagModelProps {
  id: string;
  name: string;
  blogAmount: number;
}

export interface BlogModelProps {
  id: string;
  title: string;
  description: string;
  content?: string;
  publishDate: string;
  coverImage?: ImageProps['src'];
  tags?: TagModelProps[];
  isHighlight: boolean;
  author?: string;
  slug: string;
}
