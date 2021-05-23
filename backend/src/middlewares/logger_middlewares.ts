const morgan = require('morgan');

import { logger } from '../utils/logger';

logger.stream = {
  write: (info: any) => {
    logger.info(info);
  },
};

morgan.format(
  'custom',
  '":method :url" :status :res[content-length] :response-time ms - :user-agent'
);

export default morgan('custom', {
  stream: logger.stream,
});