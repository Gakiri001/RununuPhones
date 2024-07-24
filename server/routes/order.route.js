import express from 'express';
import {createorder} from "../controllers/order.controllers.js"
const router = express.Router();


router.post('/order', createorder);
// router.get('/order', getorsder);
// router.delete('/order/:id', deleteOrder);

export default router;
