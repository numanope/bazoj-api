let output;
if (typeof window === 'undefined') {
	output = require('./ApiClientServer.js');
}
else{
	output = require('./ApiClientBrowser.js');
}

module.exports = output
