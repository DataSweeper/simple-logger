var EventEmitter = require("events").EventEmitter;
var util = require("util");
var config = require('./config');
var Output = require('./lib/output');

var LEVELS = {
  'trace': 10,
  'debug': 20,
  'info': 30,
  'warn': 40,
  'error': 50,
  'fatal': 60
}

function SimpleLogger(name) {
	EventEmitter.call(this);
  util._extend(SimpleLogger.prototype, loggingFunctions)
  this.type = config[name].type;
  this.name = config[name].name;
  this.size = config[name].size;
  this.output = new Output(this)
 }

util.inherits(SimpleLogger, EventEmitter);

var loggingFunctions = {}


Object.keys(LEVELS).forEach(function bulidLevel(_level) {
  loggingFunctions[_level] = function checkLevel(extra) {
    this.level = SimpleLogger.prototype.coerce(LEVELS[_level])
    this.output.write(this.level, extra);
  }
})

/*SimpleLogger.prototype.get = function(name) {
  util._extend(SimpleLogger.prototype, loggingFunctions)
  this.type = config[name].type;
  this.name = config[name].name;
  this.size = config[name].size;
  this.output = new Output(this)
  return this;
};*/

SimpleLogger.prototype.coerce = function coerce(value) {
  if (!isNaN(parseInt(value, 10)) && isFinite(value)) {
    if (value < 10) value = 10
    if (value > 60) value = 60

    return value
  }
  return LEVELS[value] || 50
}

module.exports = SimpleLogger;