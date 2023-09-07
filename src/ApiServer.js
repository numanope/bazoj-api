// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');

function ApiServer(port=null) {
	// let hasRequired = Vars.checkStructure({port}, {port: ['num', 'null']});
	// if(hasRequired.ok){
	// 	this.app = new Koa();
	// 	this.app.use(bodyParser());
	// 	this.router = new Router();
	// 	this.actions = {};
	// 	this.props = {};
	// 	this.props.port = port;
	// 	out.ok = true;
	// }
	// else{
	// 	out.out.push(...hasRequired.out);
	// }
}

// ApiServer.prototype.fromApi = function(api, callback=null) {
// 	let out = { ok: null, out: [] };
// 	const required = {
// 		api: {
// 			actions: 'obj',
// 			props: 'obj',
// 		},
// 	};
// 	let hasRequired = Vars.checkStructure({api}, required);
// 	if(hasRequired.ok){
// 		this.actions = {...this.actions, ...api.actions};
// 		this.props = {...this.props, ...api.props};
// 		if(callback){
// 			callback();
// 		}
// 		out.ok = true;
// 	}
// 	else{
// 		out.out.push(...hasRequired.out);
// 	}
// 	return out;
// };

// ApiServer.prototype.setAction = function(method, resource, callback) {
// 	let out = { ok: null, out: [] };
// 	const required = {
// 		method: 'str',
// 		resource: 'str',
// 		callback: 'fun',
// 	};
// 	let hasRequired = Vars.checkStructure({method, resource, callback}, required);
// 	if(hasRequired.ok){
// 		if (!this.actions[resource]) {
// 			this.actions[resource] = {};
// 		}
// 		this.actions[resource][method] = callback;
// 		out.ok = true;
// 	}
// 	else{
// 		out.out.push(...hasRequired.out);
// 	}
// 	return out;
// };

// ApiServer.prototype.start = function() {
// 	this.router.post('/', (ctx) => {
// 		const actionName = ctx.request.body.action;
// 		const action = this.actions[actionName];
// 		if (action) {
// 			action(ctx);
// 		}
// 		else {
// 			ctx.status=400;
// 			ctx.body='InvalidAction';
// 		}
// 	});

// 	this.app.use(this.router.routes());

// 	this.app.listen(this.port, () => {
// 		console.log(`Listening_on_port_${this.port}`);
// 	});
// };

module.exports = ApiServer;
