const fetch = require('node-fetch');
const isOnline = require('is-online');

class ApiClient {
	constructor(method, type, url, headers, body) {
		let out = { ok: null, err: null };

		this.defaults = {
			rest: {
				headers: {
					Accept: 'application/json',
					'Content-type': 'application/json; charset=UTF-8',
				},
			},
		};

		this.type = type.toUpperCase();
		this.method = method;
		this.url = url;
		this.headers =
			headers != null &&
			headers != undefined &&
			headers != {}
				? headers
				: this.defaults.rest.headers;
		this.body = body || null;
		out.ok = true;

		return out;
	}

	setBody(body) {
		let out = { ok: null, err: null };

		// TODO: replace with validate.js here
		if(body != null && typeof body == 'object')
		this.body = body;
		out.ok = true;

		return out;
	}

	async query() {
		let out = null;

		if (await isOnline()) {
			const options = {
				method: this.method,
				headers: this.headers,
				body: this.body,
			};

			let results;
			try {
				results = await fetch(this.url, options);
			}
			catch (error) {	throw error; }
			let data = null;
			if (this.type == 'REST') {
				data = await results.json();
			}
			return Promise.resolve(data);
		}
		else {
			return Promise.reject('Offline');
		}
	}
}

module.exports = ApiClient;
