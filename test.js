logger = require('./index');

log = new logger('agent');
log1 = new logger('server');

log.info("Hello world.");
log1.warn("javascirpt warning.");