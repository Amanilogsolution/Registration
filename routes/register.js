import express from 'express';
import { registerController } from '../controller/registerController.js';
const router = express.Router();
router.post('/registerdata',registerController)


export default router

