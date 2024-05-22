import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();


router.post('/p', StudentControllers.createProduct);

export const StudentRoutes = router;
