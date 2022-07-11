class TestService {
  private message: string;

  public async index(): Promise<string> {
    this.message = 'Hellow World';
    return this.message;
  }
}

export default TestService;
