import { Category, Post, PostDetail } from '../types/post';

export async function fetchPosts(
  page: number,
  categoryId?: string
): Promise<{ posts: Post[]; hasMore: boolean; categories: Category[] }> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    categoryId: categoryId || '',
  });

  const response = await fetch(`/api/posts?${queryParams.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return {
    posts: data.posts,
    hasMore: data.posts.length > 0,
    categories: data.categories,
  };
}

export async function fetchCategories(
): Promise<{categories: Category[] }> {

  const response = await fetch(`/api/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return {
    categories: data.categories,
  };
}




export async function fetchPost(id: string): Promise<PostDetail> {
  const response = await fetch(`/api/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await response.json();
  return data;
}
