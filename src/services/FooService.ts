import { IFooRepository } from '@/interfaces/IFooRepository';
import { IFooService } from '@/interfaces/IFooService';
import FooRepository from '../repositories/FooRepository';
export class FooService implements IFooService {
  constructor(private readonly repository?: IFooRepository) {}

  public async index(phrase?: string): Promise<string> {
    return this.repository.index(phrase ?? '');
  }
}

export default new FooService(FooRepository);
