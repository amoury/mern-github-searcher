import { CustomError } from '../errors/CustomError';

export class AuthorizationError extends CustomError {
  statusCode = 401;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
