import { Router } from 'express';
import { books } from './book.routes';

import { publishings } from './publishing.routes';

const router = Router();

router.use('/publishing', publishings);
router.use('/book', books);

export { router };