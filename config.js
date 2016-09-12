var fs = require('fs'), path = require('path');
var LOG_DIR = path.dirname(require.main.filename) + "/log";


if (!fs.existsSync(LOG_DIR)){
    fs.mkdirSync(LOG_DIR);
}

config = {
	"agent" : {
		type : "file",
		name: LOG_DIR + "/agent.log",
		size: 5
	},
	"server" : {
		type : "file",
		name : LOG_DIR + "/server.log",
		size : 5
	}
}

module.exports = config
