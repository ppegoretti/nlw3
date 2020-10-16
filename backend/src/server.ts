import express, { json } from 'express';
import path from 'path';
import routes from './routes';

import './database/connection';
const app = express();

app.use(json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({ message: 'Hello World' });
// });

app.listen(3333);
