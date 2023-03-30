import FooRepository, { IFooRepository } from '../repositories/FooRepository';

export interface IFooService {
  index(phrase?: string): Promise<string>;
}
export class FooService implements IFooService {
  constructor(private readonly repository?: IFooRepository) {}

  public async index(phrase?: string): Promise<string> {
    return this.repository.index(phrase ?? '');
  }
}

export default new FooService(FooRepository);
