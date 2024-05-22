import { Request, Response } from 'express';
import { ProductServices } from './product.service';


// database query

const createProduct = async (req: Request, res: Response) => {
  try {

    //must have product outer object  { "product": {....}  }
    const { product: productData } = req.body;
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



const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsIntoDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched succesfully !',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};



const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched succesfully  !',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};



//search
const searchProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

  console.log('searchTerm',searchTerm)
    const result = await ProductServices.searchFromDB(searchTerm as string);

    res.status(200).json({
      success: true,
      message: 'Product fetched succesfully  !',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//search by email
const searchByemail = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

  console.log('searchTerm',searchTerm)
    const result = await ProductServices.searchFromDB(searchTerm as string);

    res.status(200).json({
      success: true,
      message: 'Product fetched succesfully  !',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};



export const ProductControllers = {

  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  searchProduct,
  searchByemail
  
  
};
