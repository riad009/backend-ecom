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


export const ProductControllers = {

  createProduct,
};
