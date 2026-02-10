import { SortOrder } from "./types";

export interface PaginationQuery {
  page?: number;
  size?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
}
