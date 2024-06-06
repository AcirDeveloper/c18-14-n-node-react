import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database/data-source'; 
import routes from './routes/index.routes';
import initializeRoles from './scripts/initializeRoles';
import cors from 'cors';

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: ['*'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

const initializeApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    await initializeRoles();
    app.disable('x-powered-by')
    app.use('/api', routes);

    console.log('App has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
    process.exit(1);
  }
};

initializeApp();

export default app;