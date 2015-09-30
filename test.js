logger = require('./index').get('agent');
logger1 = require('./index').get('server');

logger.info("Getting started.");
logger1.info("Hello world.");