const ApiClientShared = require('./ApiClientShared.js');

function ApiClient (){
	ApiClientShared.call(this);
}
ApiClient.prototype = Object.create(ApiClientShared.prototype);

ApiClient.prototype.init = function() {
	const fetch = window.fetch.bind(window);
	const isOnline = async () => navigator.onLine;
	this.fetch = fetch;
	this.isOnline = isOnline;
}

console.log('APICLIENTSERVER', APICLIENTSERVER)
