import { Request, Response } from 'express';
import { ProductServices } from './product.service';


// database query

const createProduct = async (req: Request, res: Response) => {
  try {

    //must have product outer object  { "product": {....}  }
     const productData = req.body;
    // const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    // accept any of data {...}
    // const productData = req.body;
    // const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


export const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let result;

    if (searchTerm) {
      // If searchTerm is provided, perform search
      console.log('searchTerm', searchTerm);
      result = await ProductServices.getProductsFromDB(searchTerm as string);
    } else {
      // If no searchTerm is provided, fetch all products
      result = await ProductServices.getProductsFromDB();
    }

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
      data: null,
    });
  }
};



// delete
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product is deleted succesfully  !',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};


const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching the product',
    });
  }
};



const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    
    const updatedProduct = await ProductServices.updateProductInDB(productId, productData);

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the product.',
    });
  }
};

//search by email
// const searchByemail = async (req: Request, res: Response) => {
//   try {
//     const { searchTerm } = req.query;

//     console.log('searchTerm', searchTerm);
//     const result = await ProductServices.searchByEmailIntoDb(searchTerm as string);

//     if (!result) {
//       // Data not found
//       return res.status(404).json({
//         success: false,
//         message: 'Product not found.',
//         data: null,
//       });
//     }

//     // Data found
//     res.status(200).json({
//       success: true,
//       message: 'Product fetched successfully!',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//     // Handle other errors
//     res.status(500).json({
//       success: false,
//       message: 'Internal server error.',
//       data: null,
//     });
//   }
// };



export const ProductControllers = {

  createProduct,
 
  getSingleProduct,
  deleteProduct,
  getProducts,
  updateProduct

  
  
};
