import {Router} from 'express';
import { listAllWithSets, create, remove } from '../controllers/weeks-controller.js';

const router = Router();

router.get('/weeks', listAllWithSets);
router.post('/weeks', create);
router.delete('/weeks/:id', remove);

export default router;
