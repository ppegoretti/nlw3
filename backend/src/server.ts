import express, { json } from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

import './database/connection';
import errorHandler from './erros/handler';
const app = express();

app.use(cors());
app.use(json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({ message: 'Hello World' });
// });

app.listen(3333);
