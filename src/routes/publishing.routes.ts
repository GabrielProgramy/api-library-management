import { Router } from 'express';
import { PublishingController } from '../modules/books/controller/PublishingController';

const publishings = Router();
const publishingController = new PublishingController();

publishings.get('/', publishingController.show);

publishings.post('/', publishingController.create);

export { publishings };