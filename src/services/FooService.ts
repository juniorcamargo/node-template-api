import { FooRepository } from '../repositories/FooRepository';

export interface IFooService {
  index(phrase?: string): Promise<string>;
}
class FooService implements IFooService {
  constructor(private readonly repository?: FooRepository) {}

  public async index(phrase?: string): Promise<string> {
    return this.repository.index(phrase ?? '');
  }
}

export default new FooService(new FooRepository());
