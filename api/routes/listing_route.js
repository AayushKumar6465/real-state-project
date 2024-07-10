import express from 'express';
import { verifyToken } from '../utility/verifyUser.js';
import { createListing, deleteListing } from '../controllers/listing_controller.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;