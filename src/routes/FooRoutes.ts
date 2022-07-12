import { Router, Request, Response } from 'express';

import FooController from '@/controllers/FooController';

const routes = Router();

routes.get('/foo/:phrase?', (req: Request, res: Response) => FooController.index(req, res));

export default routes;
