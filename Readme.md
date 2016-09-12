#SimpleLogger
  *A logger System for node*
**Usage**
  > You can specify where to write log (ex : file, console)

*example*

INSTALL :
--------

npm install logkeeper

CONFIGURATION :
-------------

in config.js.

```
config = {
	"agent" : {
		type : "file",					//"file", "console"
		name: LOG_DIR + "/agent.log",	//log filename
		size: 5							//size in MB
	},
	"server" : {
		type : "file",
		name : LOG_DIR + "/server.log",
		size : 5
	}
}
```

USAGE :
------

```
logger = require('logkeeper');

log = new logger('agent');
log1 = new logger('server');

log.info("Hello world.");
log1.warn("javascirpt warning.");
```

> In the about program first line will log with agent properties, and log1 will log with server properties specified in config.js