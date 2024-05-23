import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 1222;
  res.json({ value: a }); // Sending the number as JSON
 
};

app.get('/', getAController);

// Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

export default app;
