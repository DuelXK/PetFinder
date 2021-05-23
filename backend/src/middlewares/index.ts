import _loggerMiddleware from './logger_middlewares';
import _authMiddleware from './auth_middleware';

const middlewares = {
  loggerMiddleware: _loggerMiddleware,
};

export const loggerMiddleware = _loggerMiddleware;
export const authMiddleware = _authMiddleware;

export default middlewares;