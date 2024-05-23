import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

 
router.post('/', ProductControllers.createProduct); // Create a new product
router.get('/', ProductControllers.getProducts); // get product 


router.get('/:productId', ProductControllers.getSingleProduct); // Get a single product by ID



router.put('/:productId', ProductControllers.updateProduct);  // update product


router.delete('/:productId', ProductControllers.deleteProduct);  // delete product





export const ProductRoutes = router;
