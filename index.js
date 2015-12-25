'use strict';

var util = require('gulp-util');
var through = require('through2');
var juice = require('juice');

var PLUGIN_NAME = 'gulp-juice';

module.exports = function(options) {
	var transform = function(file, encoding, callback) {
		if(file.isNull()) {
			return callback(null, file);
		}

		if(file.isStream()) {
			return callback(new util.PluginError(PLUGIN_NAME, 'Streaming not supported.'));
		}

		if(file.relative.match(/\.html?$/i)) {
			file.contents = new Buffer(juice(file.contents.toString(), options));
			this.push(file);
		}

		callback();
	};

	return through.obj(transform);
};
