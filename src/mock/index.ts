import { createServer, Model, Server } from 'miragejs';
import data from './data.json';
import { Category, Post } from '../types/post';


const index: Server = createServer({
  models: {
    post: Model,
    category: Model,
    postCategory: Model
  },
  /*
  the category ids are not unique, so i just filter them by name..
        {"id": "d939e6c4-1a1c-4b9f-bc20-05b9fa8c29a6", "name": "Ecommerce"},
        {"id": "925aa7c0-1f86-41b8-9ecc-8a2b7d044c44","name": "Ecommerce"},
 */

  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const { page, categoryId } = request.queryParams;
      let posts = schema.all('post');
      const perPage = 10;
      const start = (parseInt(page, 10) - 1) * perPage;
      const end = start + perPage;
      const totalPages = Math.ceil(posts.length / perPage);



      let filteredPosts;
      if (categoryId) {
        const category = schema.find('category', categoryId);
        if (category) {
          filteredPosts = posts.slice(start, end).models.map((post: any) => post.attrs).filter((post: any) =>
            post.attrs.categories.some((category: any) => category.name === categoryId)
          );
        }
      }
      else
      {
        filteredPosts = posts.slice(start, end).models.map((post: any) => post.attrs);

      }
      return {
        totalPages,
        posts: filteredPosts,
      };
    });


    this.get('/categories', (schema) => {
      let posts = schema.all('post');
      const categories: Category[] = Array.from(
        new Set(
          posts.models
            .flatMap((post:any) => {// cannot used post type and post Model...
              return post.attrs.categories.map((category: Category) => {
                return category;
              });
            })
        )
      ).reduce((uniqueCategories: Category[], category: Category) => {
        if (!uniqueCategories.some((c) => c.name === category.name)) {
          uniqueCategories.push(category);
        }
        return uniqueCategories;
      }, []);
      return {
        categories
      };
    });


    this.get('/posts/:id', (schema, request) => {
      const { id } = request.params;
      const post = schema.find('post', id);
      if (!post) {
        return [];
      }
      return post.attrs;
    });
  },

  seeds(server) {
    server.db.loadData({
      posts: data.posts.map((post: Post) => {
        return {
          ...post,
          categories: post.categories.map((category) => {
            return {
              id: category.id,
              name: category.name
            };
          })
        };
      })
    });
  }
});

export default index;
