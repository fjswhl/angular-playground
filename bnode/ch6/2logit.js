var util = require('util');
var connect = require('connect');

function logit(req, res, next) {
	util.log(util.format('Request recieved: %s, %s', req.method, req.url))
	next()
}


function echo(req, res, next) {
	req.pipe(res)
}

function EchoObject() {}
EchoObject.handle = function (req, res, next) {
	req.pipe(res)	
}

function auth(req, res, next) {
	function send401() {
		res.writeHead(401, {'WWW-Authenticate': 'Basic'})
		res.end()
	}

	var authHeader = req.headers.authorization
	if (!authHeader) {
		send401()
		return
	}

	var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':')
	var user = auth[0]
	var pass = auth[1]

	if (user == 'foo' && pass == 'bar') {
		next()
	} else {
		send401()
	}
}

connect()
	.use(logit)
	.use(auth)
	.use(function (req, res) {
		res.end('Authorized!')
	})
	.listen(3000)
