import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    if (result.error === "Insufficient stock") {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory"
      });
    } else if (result.error === "Order not found") {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};


// export const getAllOrders = async (req: Request, res: Response) => {
//     try {
//       const orders = await OrderServices.getOrdersFromDB();
//       res.status(200).json({
//         success: true,
//         message: 'Orders fetched successfully',
//         data: orders,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         message: 'Failed to fetch orders',
//         error: err,
//       });
//     }
//   };


//   const searchByemail = async (req: Request, res: Response) => {
//     try {
//       const { email } = req.query;
  
//       console.log('searchTerm', email);
//       const result = await OrderServices.orderByEmail(email as string);
  
//       if (!result || result.length === 0) {
//         // Data not found
//         return res.status(404).json({
//           success: false,
//           message: 'Order not found',
//           data: null,
//         });
//       }
  
//       // Data found
//       res.status(200).json({
//         success: true,
//         message: 'Product fetched successfully!',
//         data: result,
//       });
//     } catch (error) {
//       console.log(error);
//       // Handle other errors
//       res.status(500).json({
//         success: false,
//         message: 'Internal server error.',
//         data: null,
//       });
//     }
//   };
  
export const getOrder = async (req: Request, res: Response) => {
    try {
      if (req.query.email) {
        // If email parameter is present, call searchByEmail
        const result = await OrderServices.getOrdersDB(req.query.email as string);
        if (!result || result.length === 0) {
          // Data not found
          return res.status(404).json({
            success: false,
            message: 'Order not found',
            data: null,
          });
        }
        // Data found
        return res.status(200).json({
          success: true,
          message: 'Order fetched successfully!',
          data: result,
        });
      } else {
        // If email parameter is not present, call getAllOrders
        const orders = await OrderServices.getOrdersDB();
        return res.status(200).json({
          success: true,
          message: 'Orders fetched successfully',
          data: orders,
        });
      }
    } catch (error) {
      console.log(error);
      // Handle errors
      return res.status(500).json({
        success: false,
        message: 'Internal server error.',
        data: null,
      });
    }
  };
  
export const orderController = {

    createOrder,
    getOrder,
    // getAllOrders,
    // searchByemail
 
  
};
