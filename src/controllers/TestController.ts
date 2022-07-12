import { Request, Response } from 'express';

import { ITestService } from '@/services/TestService';

class TestController {
  private service: ITestService;

  constructor(service: ITestService) {
    this.service = service;
  }

  public async index(req: Request, res: Response): Promise<Response> {
    console.log(this.service);
    const data = await this.service.index();
    return res.status(200).json({ success: true, data });
  }
}
export { TestController };
