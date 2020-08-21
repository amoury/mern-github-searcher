import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { router } from './routes';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(3001, () => console.log('Listening on port 3001'));
