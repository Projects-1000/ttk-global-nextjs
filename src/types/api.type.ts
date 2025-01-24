import { BlogModelProps, DocumentModelProps } from './model.type';

export interface PaginationRequest {
  limit: number;
  page: number;
}

export interface PaginationResponse<T> {
  data: T[];
  total: number;
  limit: number;
  page: number;
}

export interface GetBlogsRequest extends PaginationRequest {
  isHighlight?: boolean | null;
  searchTitle?: string | null;
  sortedDate?: boolean | null;
  filterTags: string[] | null;
}

export interface GetDocumentRequest extends PaginationRequest {
  title?: string;
  tags?: string;
}

export interface GetBlogsResponse extends PaginationResponse<BlogModelProps> {}
export interface GetDocumentResponse extends PaginationResponse<DocumentModelProps> {}
