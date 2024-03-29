import { Request, Response } from 'express';

import FooService from '../services/FooService';

import { IFooService } from '@/interfaces/IFooService';

class FooController {
  constructor(private readonly service: IFooService) {}

  public async index(req: Request, res: Response): Promise<Response> {
    const data = await this.service.index(req.params.phrase);
    return res.status(200).json({ success: true, data });
  }
}

export default new FooController(FooService);
