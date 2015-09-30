#SimpleLogger
  *A logger System for node*
**Usage**
  > You can specify where to write log (ex : file, console)

*example*

npm install logkeeper
```
logger = require('logkeeper');

log = new logger('agent');
log1 = new logger('server');

log.info("Hello world.");
log1.warn("javascirpt warning.");
```

> In the about program first line will log with agent properties, and log1 will log with server properties specified in config.js

*TODO*
  > Log rotation functionality.
  
  > Adding Log directory - where the logger should log.