import { Router } from 'express';
import { AuthorController } from '../modules/books/controller/AuthorController';

const authors = Router();
const authorController = new AuthorController();

authors.get('/', authorController.list);
authors.post('/', authorController.create);

export { authors };