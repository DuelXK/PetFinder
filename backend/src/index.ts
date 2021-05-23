import app from './server';
import config from './config';

import { logger } from './utils/logger'

app.listen(config.port, () => {
  logger.info(`SERVER UP ON: ${config.port}`)
});
