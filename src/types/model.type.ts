import { ImageProps, StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export interface TagModelProps {
  id: string;
  name: string;
  blogAmount: number;
}

export interface BlogModelProps {
  id: string;
  title: string;
  description: string;
  content?: HTMLElement | ReactElement;
  publishDate: string;
  coverImage?: ImageProps['src'];
  tags?: TagModelProps[];
  isHighlight: boolean;
  author?: string;
}
