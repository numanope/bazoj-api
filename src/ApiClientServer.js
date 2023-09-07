const ApiClientShared = require('./ApiClientShared.js');

function ApiClient (){
	ApiClientShared.call(this);
}
ApiClient.prototype = Object.create(ApiClientShared.prototype);

ApiClient.prototype.init = async function() {
	const { default: fetch } = await import('node-fetch');
	const { default: isOnline } = await import('is-online');
	this.fetch = fetch;
	this.isOnline = isOnline;
}

module.exports = ApiClient;
