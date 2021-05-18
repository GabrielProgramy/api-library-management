import { Router } from 'express';
import { BookController } from '../modules/books/controller/BookController';

const books = Router();
const bookController = new BookController();

books.post('/', bookController.create);

export { books };