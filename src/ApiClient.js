const fetch = require('node-fetch');
const isOnline = require('is-online');

const defaults = {
	rest: {
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json; charset=UTF-8',
		},
	},
};

function ApiClient(type, method, url, headers, body) {
	this.type = type?.toLowerCase() || 'rest';
	this.method = method;
	this.url = url;
	this.headers =
		headers != null && headers != undefined && Object.keys(headers).length > 0
			? headers
			: defaults.rest.headers;
	this.body = body || null;
}

ApiClient.prototype.setType = function (type) {
	this.type = type?.toLowerCase() || 'rest';
}

ApiClient.prototype.setMethod = function (method) {
	this.method = method;
}

ApiClient.prototype.setHeaders = function (headers) {
	// TODO: replace with validate.js here
	if (headers != null && typeof headers === 'object') {
		this.headers = headers;
	}
	else {
		throw new Error('Invalid headers');
	}
}

ApiClient.prototype.setBody = function (body) {
	// TODO: replace with validate.js here
	if (body != null && typeof body === 'object') {
		this.body = body;
	}
	else {
		throw new Error('Invalid body');
	}
};

ApiClient.prototype.query = async function () {
	if (!(await isOnline())) {
		throw new Error('Offline');
	}
	else {
		const options = {
			method: this.method,
			headers: this.headers,
			body: this.body,
		};

		try {
			const data = await fetch(this.url, options);
			return data;
		}
		catch (err) { if(err) throw err; }
	}
};

module.exports = ApiClient;
