import { Request, Response } from "express";
import { BookRepository } from "../repositories/implementations/BookRepository";

class BookController {
  async create(request: Request, response: Response) {
    const { title, release_year, publishing_id } = request.body;

    const bookRepository = new BookRepository();

    const book = await bookRepository.create({ title, release_year, publishing_id });

    return response.json(book);
  }
}

export { BookController };