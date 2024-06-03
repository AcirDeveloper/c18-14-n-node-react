import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database/data-source'; 
import routes from './routes/index.routes';
import initializeRoles from './scripts/initializeRoles';

const app = express();
app.use(express.json());

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