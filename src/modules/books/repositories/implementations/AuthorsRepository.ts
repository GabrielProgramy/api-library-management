import { getRepository, Repository } from "typeorm";
import { Author } from "../../entities/Author";
import { IAuthorsRepository } from "../IAuthorsRepository";

class AuthorsRepository implements IAuthorsRepository {
  private authorRepository: Repository<Author>

  constructor() {
    this.authorRepository = getRepository(Author);
  }

  async create(name: string): Promise<Author> {
    const authorExists = await this.authorRepository.findOne({ name });

    if (authorExists) {
      return authorExists;
    }

    const author = this.authorRepository.create({
      name,
    })

    await this.authorRepository.save(author);

    return author;
  }

  async list(): Promise<Author[]> {
    const authors = await this.authorRepository.find();

    return authors;
  }

}

export { AuthorsRepository }