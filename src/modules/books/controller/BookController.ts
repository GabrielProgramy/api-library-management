import { Request, Response } from "express";
import { BookRepository } from "../repositories/implementations/BookRepository";

class BookController {
  async create(request: Request, response: Response) {
    const { title, release_year, publishing_id } = request.body;

    const bookRepository = new BookRepository();

    const book = await bookRepository.create({ title, release_year, publishing_id });

    return response.json(book);
  }

  async show(request: Request, response: Response) {
    const bookRepository = new BookRepository();

    const books = await bookRepository.list();

    return response.json(books).status(200);
  }
}

export { BookController };