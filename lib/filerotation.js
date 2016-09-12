var fs = require('fs');

function fileOperations (name, size) {
	this.name = name
	this.size = size
}

fileOperations.prototype.getsizeMB = function() {
	var stats = fs.statSync(this.name)
 	var fileSizeInBytes = stats["size"]
 	return fileSizeInBytes / 1000000.0
}

fileOperations.prototype.rotatefile = function() {
	fs.rename(this.name, this.name+"_"+this.getTimeStamp());
}

fileOperations.prototype.getTimeStamp = function() {
	return new Date().getTime();
}

fileOperations.prototype.check = function() {
		if (fs.existsSync(this.name)) {
		if(this.getsizeMB() >= this.size) {
			this.rotatefile();
		}
	}
}

module.exports = fileOperations