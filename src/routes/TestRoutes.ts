import { Router } from 'express';

import { TestController } from '@/controllers/TestController';
import { TestService } from '@/services/TestService';

const serviceTest = new TestService();
const testController = new TestController(serviceTest);
const routes = Router();

routes.get('/', testController.index);

export default routes;
