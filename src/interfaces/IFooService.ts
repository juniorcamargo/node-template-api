export interface IFooService {
  index(phrase?: string): Promise<string>;
}