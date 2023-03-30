export interface IFooRepository {
  index(phrase?: string): Promise<string>;
}
