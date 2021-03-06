import { getRepository, Repository } from "typeorm";
import { Book } from "../../entities/Book";
import { IBookRepository, ICreateBookDTO } from "../IBookRepository";


class BookRepository implements IBookRepository {
  private bookRepository: Repository<Book>;

  constructor() {
    this.bookRepository = getRepository(Book);
  }

  async create({
    title,
    release_year,
    publishing_id,
    author_id
  }: ICreateBookDTO): Promise<Book> {
    const bookAlreadyExist = await this.bookRepository.findOne({ title });

    if (bookAlreadyExist) {
      return bookAlreadyExist;
    }

    const book = this.bookRepository.create({
      title,
      release_year,
      publishing_company_id: publishing_id,
      author_id,
    });

    await this.bookRepository.save(book);

    return book;
  }

  async list(): Promise<Book[]> {
    const books = await this.bookRepository.find({
      relations: ['author', 'publishing']
    });

    return books;
  }

}

export { BookRepository };