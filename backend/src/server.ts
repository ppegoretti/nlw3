import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.post('/users/:id', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);
  return response.json({ message: 'Hello World' });
});

app.listen(3333);
