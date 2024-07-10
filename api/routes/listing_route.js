import express from 'express';
import { verifyToken } from '../utility/verifyUser.js';
import { createListing, deleteListing, updateListing } from '../controllers/listing_controller.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);

export default router;