logger = require('../index');
tap = require('tap');


log = new logger('agent')
log1 = new logger('server');

tap.equal('agent.log', log.name, 'check if numbers still work')
tap.equal('server.log', log1.name, 'check if numbers still work')
