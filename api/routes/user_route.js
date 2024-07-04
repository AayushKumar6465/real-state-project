import express from 'express';
import { updateUser, test } from '../controllers/user_controller.js';
import { verifyToken } from '../utility/verifyUser.js';

const router = express.Router();

router.get('/test', test);  
router.post('/update-user/:id', verifyToken, updateUser);

export default router;