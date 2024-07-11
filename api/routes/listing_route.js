import express from 'express';
import { verifyToken } from '../utility/verifyUser.js';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing_controller.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);

export default router;