export interface PostCategory {
  name: string;
  parentCategory: string;
  category: string;
  price: number;
  data: string;
  description: string;
  operations: string;
}
export interface PostTransactionType {
  values: PostCategory[];
  id: string;
}
