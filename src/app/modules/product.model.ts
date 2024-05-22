import { Schema, model } from 'mongoose';
import {

  Product,

} from './product/product.interface';


const productSchema = new Schema({
    name: { type: String, required: true },
   
  });
  
 export const ProductModel = model<Product>('Product',productSchema)
  




///



