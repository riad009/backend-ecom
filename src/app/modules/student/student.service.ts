
import { ProductModel } from '../student.model';
import { Product,  } from './student.interface';


  
const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
  };
  


export const StudentServices = {
  
  createProductIntoDB,
};