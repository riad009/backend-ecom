import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/products', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 1222;
  res.json({ value: a }); // Sending the number as JSON
  // Alternatively, you could use res.send(a.toString());
};

app.get('/', getAController);

export default app;
