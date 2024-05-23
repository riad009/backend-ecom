
import { ProductModel } from '../product.model';
import { Order } from './order.interface';
import { OrderModel } from './product.model';



// const createOrderIntoDB = async (order: Order) => {
//   const result = await OrderModel.create(order);
//   return result;
// };
const createOrderIntoDB = async (order: Order) => {
    try {
      const product = await ProductModel.findById(order.productId);
  
      if (product && order.productId === product._id.toString()) {
        if (order.quantity > product.inventory.quantity) {
          return { error: "Insufficient stock" };
        }
  
        const updatedQuantity = product.inventory.quantity - order.quantity;
        const updatedInStock = updatedQuantity > 0;
  
        await ProductModel.updateOne(
          { _id: order.productId },
          {
            $set: {
              "inventory.quantity": updatedQuantity,
              "inventory.inStock": updatedInStock
            }
          }
        );
  
        const result = await OrderModel.create(order);
        return result;
      } else {
        return { error: "Order not found" };
      }
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };




// const getOrdersFromDB = async () => {
//     const result = await OrderModel.find({});
//     return result;
//   };


//   export const orderByEmail = async (email: string) => {
//     const result = await OrderModel.aggregate([
//       {
//         $match: { email }
//       }
//     ]);
//     return result;
//   };
export const getOrdersDB = async (email?: string) => {
    if (email) {
      // If email is provided, fetch orders by email
      const result = await OrderModel.aggregate([
        {
          $match: { email }
        }
      ]);
      return result;
    } else {
      // If no email is provided, fetch all orders
      const result = await OrderModel.find({});
      return result;
    }
  };
  

export const OrderServices = {

    createOrderIntoDB,
    // getOrdersFromDB,
    // orderByEmail,
    getOrdersDB
  
};