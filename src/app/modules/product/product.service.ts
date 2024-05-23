
import { ProductModel } from '../product.model';
import { Product, } from './product.interface';


// after db query its ensure creating field is correct
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};


export const getProductsFromDB = async (name?: string) => {
  if (name) {
    // Constructing a regular expression to perform a case-insensitive partial match
    const regex = new RegExp(name, 'i');
  
    // Querying the database using the regular expression for multiple fields
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: regex } },
        { description: { $regex: regex } },
        // Add more fields here if needed
      ]
    });
  

    return result;
  } else {
    // If no name parameter is provided, fetch all products
    const result = await ProductModel.find({ isDeleted: { $ne: true } });
    return result;
  }
};


// id wise fetch 
const getSingleProductIntoDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// //delete
// const deleteProductFromDB = async (_id: string) => {
//   const result = await ProductModel.updateOne({ _id } ,{isDeleted: true}   );
//   return result;
// };
const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};



// update
const updateProductInDB = async (productId: string, productData: any): Promise<any> => {
  try {

   
    // Find the product by its ID and update it with the new data
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      productData,
      { new: true } // This option returns the updated document
    );

    // If the product is not found, return null
    if (!updatedProduct) {
      return null;
    }

    // Return the updated product
    return updatedProduct;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error updating product:', error);
    throw new Error('Error updating product');
  }
};



export const ProductServices = {

  createProductIntoDB,

  getSingleProductIntoDB,
  deleteProductFromDB,

  getProductsFromDB,
  updateProductInDB,
};