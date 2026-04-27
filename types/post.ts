export interface Post {
  abstract: string;
  content: string;
  isPublished: boolean;
  lastModifiedDate: Date;
  path: string;
  tags: string[];
  title: string;
}
