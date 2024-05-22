
import { ProductModel } from '../product.model';
import { Product,  } from './product.interface';


  // after db query its ensure creating field is correct
const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
  };
  


export const ProductServices = {
  
  createProductIntoDB,
};