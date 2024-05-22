import { Schema, model } from 'mongoose';
import { z } from 'zod';
import { Product } from './product/product.interface';

// Mongoose schema for MongoDB
const variantMongooseSchema = new Schema({
  size: { type: Number, required: true },
  color: { type: String, required: true },
  style: { type: String, required: true }
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
  size: z.number(),
  color: z.string(),
  style: z.string()
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
  inventory: inventoryZodSchema,
  isDeleted: z.boolean().default(false)
});

export { productZodSchema };

// Example usage for Zod validation
// const validatedProduct = productZodSchema.parse({
//   name: "Sample Product",
//   description: "This is a sample product",
//   price: 19.99,
//   category: "Sample Category",
//   tags: ["tag1", "tag2"],
//   variants: [{ size: 42, color: "blue", style: "casual" }],
//   inventory: { quantity: 100, inStock: true },
//   isDeleted: false
// });