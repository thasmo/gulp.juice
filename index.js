'use strict';

var util = require('gulp-util');
var through = require('through2');
var juice = require('juice');

var PLUGIN_NAME = 'gulp-juice';

module.exports = function(options) {
	var transform = function(file, encoding, callback) {
		var self = this;

		var onJuiceComplete = function(err, html) {
			if(!err) {
				file.contents = new Buffer(html);
			}
			self.push(file);
			callback();
		}

		if(file.isNull()) {
			return callback(null, file);
		}

		if(file.isStream()) {
			return callback(new util.PluginError(PLUGIN_NAME, 'Streaming not supported.'));
		}

		if(file.relative.match(/\.html?$/i)) {
			if(options.includeResources) {
				juice.juiceResources(file.contents.toString(), options, onJuiceComplete);
			} else {
				onJuiceComplete(null, juice(file.contents.toString(), options));
			}
		} else {
			callback();
		}
	};

	return through.obj(transform);
};
