import { Router } from 'express';

import { publishings } from './publishing.routes';

const router = Router();

router.use('/publishing', publishings);

export { router };