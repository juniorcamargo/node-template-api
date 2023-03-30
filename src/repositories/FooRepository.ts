import { IFooRepository } from '@/interfaces/IFooRepository';

export class FooRepository implements IFooRepository {
  public index(phrase: string): Promise<string> {
    return Promise.resolve(`Hellow World. This is my node template api. ${phrase}`);
  }
}

export default new FooRepository();
