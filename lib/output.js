var fs = require('fs'),
	util = require('util'),
	path = require('path');

function Output(config) {
	this.stdout = null;
	this.stdoutFn = null;

	if (config.type === 'console') {
		this.stdout = process.stdout;
		this.stdoutFn = process.stdout.write;
	} else if (config.type === 'file') {
		var file = path.resolve(process.cwd(), config.name);
		var outputDir = path.dirname(file);
		if (!fs.existsSync(outputDir)) {
			throw new Error('Invalid output file, directory does not exist:' + outputDir);
		}
		var stream = fs.createWriteStream(file, { flags: 'a'});
		this.stdout = stream;
		this.stdoutFn = stream.write;
	} else if (config.type === 'function') {
		this.stdout = this;
		this.stdoutFn = config;
	} else {
		throw new Error('Output got invalid config:', config);
	}
}

/**
 * Writes data to the output resource
 * @param {...string|number|object} arguments - data to be written, can be a formatted string
 */
Output.prototype.write = function(l, m) {
	if (this.stdout === null) {
		return;
	}
	e = new Entry(l, m);
	//var msg = util.format.apply(this, arguments) + '\n';
	this.stdoutFn.call(this.stdout, e.toString());
};

/**
 * Writes data to the output resource with no formatting nor new line
 * @param {string} data - The data to write
 */
Output.prototype.print = function(data) {
	if (this.stdout === null) {
		return;
	}

	this.stdoutFn.call(this.stdout, data);
};

function Entry(level, msg) {
  this.level = level
  this.pid = process.pid
  this.time = new Date().toISOString()
  this.msg = msg

  this.string_level = {  10: 'TRACE',
  		20: 'DEBUG',
  		30: 'INFO',
  		40: 'WARN',
  		50: 'ERROR',
  		60: 'FATEL'
  	}
}

Entry.prototype.toString = function() {
	console.log(this.level)
	console.log(this.string_level[this.level])
	console.log(path.dirname(require.main.filename))
	return "{ 'time' : '" + this.time + "','level' : '" + this.string_level[this.level] + "','pid' : " + this.pid + ",'msg' : '" + this.msg +"'}\n";
}

module.exports =  Output;