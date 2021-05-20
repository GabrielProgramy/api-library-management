import { Author } from "../entities/Author";

interface IAuthorsRepository {
  create(name: string): Promise<Author>;
  list(): Promise<Author[]>
}

export { IAuthorsRepository };