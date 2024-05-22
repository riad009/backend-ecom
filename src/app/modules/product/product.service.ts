
import { ProductModel } from '../product.model';
import { Product, } from './product.interface';


// after db query its ensure creating field is correct
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};


// get all products
const getAllProductsIntoDB = async () => {
  const result = await ProductModel.find({isDeleted: { $ne: true } });
  return result;
};

// id wise fetch 
const getSingleProductIntoDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id,  isDeleted: { $ne: true } });
  return result;
};

//delete
const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.updateOne({ _id } ,{isDeleted: true}   );
  return result;
};


export const ProductServices = {

  createProductIntoDB,
  getAllProductsIntoDB,
  getSingleProductIntoDB,
  deleteProductFromDB
};