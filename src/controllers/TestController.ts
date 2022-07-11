import { Request, Response } from 'express';

class TestController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json('Hello World');
  }
}

export default new TestController();
