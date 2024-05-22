import { Schema, model } from 'mongoose';
import {

  Product,

} from './product/product.interface';


const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
      {
        size: { type: Number, required: true },
        color: { type: String, required: true },
        style: { type: String, required: true }
      }
    ],
    inventory: {
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, required: true }
    },
    isDeleted: {
      type: Boolean,
      default: false,

    }
  });
  
 export const ProductModel = model<Product>('Product',productSchema)
  




///



