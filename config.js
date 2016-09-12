var fs = require('fs'), path = require('path');
var LOG_DIR = path.dirname(require.main.filename) + "/log"; //log dir path


if (!fs.existsSync(LOG_DIR)){
    fs.mkdirSync(LOG_DIR);
}

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

module.exports = config
