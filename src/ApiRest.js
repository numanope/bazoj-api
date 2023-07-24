const Vars = require('../General/Vars.js');

function ApiServer(port) {
	let out = {
		ok: false,
		out: [],
		ret: null
	};
	let hasRequired = Vars.checkStructure({port}, {port: 'num'});
	if(hasRequired.ok){
		this.actions = {};
		this.props = {};
		out.ok = true;
	}
	else{
		out.out.push(...hasRequired.out);
	}
	return out;
}

ApiServer.prototype.setProp = function(name, value) {
	let out = {
		ok: false,
		out: [],
		ret: null
	};
	const required = {
		name: 'str',
		value: 'str',
	};
	let hasRequired = Vars.checkStructure({name, value}, required);
	if(hasRequired.ok){
		this.props[name] = value;
		out.ok = true;
	}
	else{
		out.out.push(...hasRequired.out);
	}
	return out;
};

ApiServer.prototype.setAction = function(method, resource, callback) {
	let out = {
		ok: false,
		out: [],
		ret: null
	};
	const required = {
		method: 'str',
		resource: 'str',
		callback: 'fun',
	};
	let hasRequired = Vars.checkStructure({method, resource, callback}, required);
	if(hasRequired.ok){
		if (!this.actions[resource]) {
			this.actions[resource] = {};
		}
		this.actions[resource][method] = callback;
		out.ok = true;
	}
	else{
		out.out.push(...hasRequired.out);
	}
	return out;
};

module.exports = ApiServer;
