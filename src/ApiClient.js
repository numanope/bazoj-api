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

function ApiClient(method, type, url, headers, body) {
	this.type = type.toUpperCase();
	this.method = method;
	this.url = url;
	this.headers =
		headers != null && headers != undefined && Object.keys(headers).length > 0
			? headers
			: defaults.rest.headers;
	this.body = body || null;
}

ApiClient.prototype.setBody = function (body) {
	let out = { ok: null, err: null };

	// TODO: replace with validate.js here
	if (body != null && typeof body === 'object') {
		this.body = body;
		out.ok = true;
	} else {
		out.err = ['Invalid body'];
	}

	return out;
};

ApiClient.prototype.query = async function () {
	let out = null;

	if (await isOnline()) {
		const options = {
			method: this.method,
			headers: this.headers,
			body: this.body,
		};

		try {
			const results = await fetch(this.url, options);
			let data = null;
			if (this.type === 'REST') {
				data = await results.json();
			}
			return Promise.resolve(data);
		} catch (error) {
			throw error;
		}
	} else {
		return Promise.reject('Offline');
	}
};

module.exports = ApiClient;
