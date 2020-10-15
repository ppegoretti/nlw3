import express, { json } from 'express';
import routes from './routes.ts';

import './database/connection';
const app = express();

app.use(json());
app.use(routes);

// app.post('/users/:id', (request, response) => {
//   console.log(request.query);
//   console.log(request.params);
//   console.log(request.body);
//   return response.json({ message: 'Hello World' });
// });

app.listen(3333);
