import { Schema, model } from 'mongoose';
import { z } from 'zod';
import { Order } from './order.interface';

// Define the Zod schema
const orderSchemaZod = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
});

// Define the Mongoose schema
const orderSchema = new Schema<Order>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

// Define the Mongoose model
export const OrderModel = model<Order>('Order', orderSchema);

// Validation function using Zod
export const validateOrder = (order: Order) => {
    return orderSchemaZod.parse(order);
};
