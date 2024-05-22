import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();


router.post('/create-product', ProductControllers.createProduct);
router.get('/get-product', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProduct);
router.delete('/:productId', ProductControllers.deleteProduct);

router.get('/ss', ProductControllers.searchProduct);

router.get('/orders/', ProductControllers.searchByemail);





export const ProductRoutes = router;
