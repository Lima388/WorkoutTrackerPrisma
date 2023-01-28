import {Router} from 'express';
import { listAll, create } from '../controllers/exercises-controller.js';

const router = Router();

router.get('/exercises', listAll);
router.post('/exercises', create);

export default router;
