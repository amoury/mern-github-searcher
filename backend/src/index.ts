import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router } from './routes';
import { errorHandler } from './middlewares/error-handler.middleware';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.get('/api/search-something', (req, res) => {
  throw new Error('hello');
});

app.use(errorHandler);

app.listen(3001, () => console.log('Listening on port 3001'));
