logger = require('../index');
tap = require('tap');


log = new logger('agent')
log1 = new logger('server');
tap.equal('file', log.type, 'check the type')
tap.equal('file', log1.type, 'check the type')
