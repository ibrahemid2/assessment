import { createServer, Server } from 'miragejs';

// import the data.json as data
import data from './data.json';


const server: Server = createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    });
  },
});

export default server;
