function ApiClient(callback) {
	if(callback) callback();
}

ApiClient.prototype.setup = function (type, method, url, headers, body) {
	this.type = type?.toLowerCase();
	this.method = method;
	this.url = url;
	this.headers = headers || null;
	this.body = body || null;
}

ApiClient.prototype.setType = function (type) {
	this.type = type?.toLowerCase() || 'rest';
};

ApiClient.prototype.setMethod = function (method) {
	this.method = method;
};

ApiClient.prototype.setHeaders = function (headers) {
	if (headers != null && typeof headers === 'object') {
		this.headers = headers;
	}
	else {
		throw new Error('Invalid headers');
	}
};

ApiClient.prototype.setBody = function (body) {
	if (body != null && typeof body === 'object') {
		this.body = body;
	}
	else {
		this.body = null;
	}
};

ApiClient.prototype.prepareBody = function () {
	if (
		(this.body != null && typeof this.body === 'object')
			|| this.body === null
	) {
		this.body = JSON.stringify(this.body)
	}
	else {
		throw new Error('Cannot prepare body');
	}
};

ApiClient.prototype.query = async function () {
	if(!(this.isOnline && this.fetch)) {
		throw new Error('Must run init() first');
	}
	else if (!(await this.isOnline())) {
		throw new Error('Offline');
	}
	else {
		const options = {
			method: this.method,
			headers: this.headers,
			body: this.prepareBody(this.body),
		};

		try {
			const data = await this.fetch(this.url, options);
			return data;
		}
		catch (err) { if (err) throw err }
	}
};

module.exports = ApiClient;