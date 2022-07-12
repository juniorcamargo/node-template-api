export interface ITestService {
  index(): Promise<string>;
}
class TestService implements ITestService {
  private message: string;

  public async index(): Promise<string> {
    this.message = 'Hellow World';
    return this.message;
  }
}

export { TestService };
