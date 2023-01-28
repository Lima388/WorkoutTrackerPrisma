import {Router} from 'express';
import { listAll, create, update } from '../controllers/sets-controller.js';
import { setSchemaValidation } from '../middlewares/setSchemaValidation.js';
import { setConditionValidation } from '../middlewares/setConditionValidation.js';

const router = Router();

router.get('/sets', listAll);
router.post('/sets', setSchemaValidation,setConditionValidation, create);
router.put('/sets', setSchemaValidation,setConditionValidation, update);

export default router;
