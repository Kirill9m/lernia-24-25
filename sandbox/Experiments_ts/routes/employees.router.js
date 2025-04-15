import express from 'express';
import auth from '../middleware/auth.js';
import { all, add, remove, edit, employee } from '../controllers/employees.controllers.js';

const router = express.Router();

router.get('/', auth, all);
router.get('/:id', auth, employee);
router.post('/add', auth, add);
router.post('/remove', auth, remove);
router.put('/edit', auth, edit);

export default router;