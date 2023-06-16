export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: Category[];
};
export type Category = {
  id: string;
  name: string;
};

export type PostDetail = {
  id: string;
  title: string;
  publishDate: string;
  author: {
    name: string;
    avatar: string;
  };
  summary: string;
  categories: {
    id: string;
    name: string;
  }[];
};
