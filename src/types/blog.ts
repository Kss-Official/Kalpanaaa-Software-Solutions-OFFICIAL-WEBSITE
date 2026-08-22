export type UserRole = 'EMPLOYEE' | 'ADMIN';
export type BlogStatus = 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED' | 'REJECTED';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  authorId?: string;
  authorName: string;
  authorEmail: string;
  status: BlogStatus;
  rejectionReason?: string;
  createdAt: string;
  publishedAt?: string;
  readTime?: string;
  coverImage?: string;
}

export interface CreateBlogSubmission {
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  authorName: string;
  authorEmail: string;
  coverImage?: string;
}
