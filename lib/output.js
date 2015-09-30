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
		console.log(config.type + " , " + config.name);
		var file = path.resolve(process.cwd(), config.name);
		var outputDir = path.dirname(file);
		if (!fs.existsSync(outputDir)) {
			throw new Error('Invalid output file, directory does not exist:' + outputDir);
		}
		var stream = fs.createWriteStream(file);
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
Output.prototype.write = function() {
	console.log("check0")
	if (this.stdout === null) {
		return;
	}
    console.log("args : " + JSON.stringify(arguments) )
	var msg = util.format.apply(this, arguments) + '\n';
	console.log("msg : " + msg)
	this.stdoutFn.call(this.stdout, msg);
};

/**
 * Writes data to the output resource with no formatting nor new line
 * @param {string} data - The data to write
 */
Output.prototype.print = function(data) {
	console.log("check1")
	if (this.stdout === null) {
		return;
	}

	this.stdoutFn.call(this.stdout, data);
};


module.exports =  Output;