import * as cors from 'cors';
import * as express from 'express';

import routes from './routes/FooRoutes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
