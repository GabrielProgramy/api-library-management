import { Request, Response } from "express";
import { AuthorsRepository } from "../repositories/implementations/AuthorsRepository";

class AuthorController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const authorsRepostory = new AuthorsRepository();

    const author = await authorsRepostory.create(name);

    return response.json(author);
  }

  async list(request: Request, response: Response) {
    const authorsRepostory = new AuthorsRepository();

    const authors = await authorsRepostory.list();

    return response.json(authors);
  }
}

export { AuthorController }