import getLogger from '@utils/get-logger';
const logger = getLogger(__filename);

export default function onHttpServerClose(): void {
  logger.info('HTTP server closed');
}