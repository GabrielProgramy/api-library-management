import { Router } from 'express';
import { authors } from './authors.routes';
import { books } from './book.routes';

import { publishings } from './publishing.routes';

const router = Router();

router.use('/publishing', publishings);
router.use('/book', books);
router.use('/author', authors);

export { router };