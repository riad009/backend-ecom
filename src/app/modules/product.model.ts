import { Schema, model } from 'mongoose';
import {   z } from 'zod';
import { Product } from './product/product.interface';

// Mongoose schema for MongoDB
const variantMongooseSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true }
});

const inventoryMongooseSchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
});

const productMongooseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantMongooseSchema],
  inventory: inventoryMongooseSchema,
  isDeleted: { type: Boolean, default: false }
});

export const ProductModel = model<Product>('Product', productMongooseSchema);

// Zod schema for validation
const variantZodSchema = z.object({
  type: z.string(),
  value: z.string()
});

const inventoryZodSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean()
});

const productZodSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantZodSchema),
  inventory: inventoryZodSchema
});

export { productZodSchema };

