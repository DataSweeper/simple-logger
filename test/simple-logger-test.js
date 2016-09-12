logger = require('../index');
tap = require('tap');


log = new logger('agent')
log1 = new logger('server');
tap.equal('file', log.type, 'check if numbers still work')
tap.equal('file', log1.type, 'check if numbers still work')
