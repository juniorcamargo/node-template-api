import { IFooRepository } from "@/interfaces/IFooRepository";

export class FooRepository implements IFooRepository {
  public index(phrase: string): string {
    return `Hellow World. This is my node template api. ${phrase}`;
  }
}

export default new FooRepository();
