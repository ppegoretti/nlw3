import { ErrorRequestHandler, response } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors;
  }

  console.error(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;