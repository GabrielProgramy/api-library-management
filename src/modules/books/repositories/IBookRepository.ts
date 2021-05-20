import { Book } from "../entities/Book";

interface ICreateBookDTO {
  title: string;
  release_year: number;
  publishing_id: string;
  author_id: string;
}

interface IBookRepository {
  create({ title, release_year, publishing_id, author_id }: ICreateBookDTO): Promise<Book>
  list(): Promise<Book[]>;
}

export { IBookRepository, ICreateBookDTO };