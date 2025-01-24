import { BlogModelProps } from './model.type';

export interface PaginationResponse<T> {
  data: T[];
  total: number;
  limit: number;
  page: number;
}

export interface GetBlogsRequest {
  isHighlight?: boolean | null;
  searchTitle?: string | null;
  sortedDate?: boolean | null;
  filterTags: string[] | null;
  limit: number;
  page: number;
}

export interface GetBlogsResponse extends PaginationResponse<BlogModelProps> {}
