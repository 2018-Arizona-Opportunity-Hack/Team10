'use strict';

const
Hapi = require('hapi'),
Http2 = require('http2'),
fs = require('fs');

// create http2 secure server listener
var server = Hapi.server({
	listener: Http2.createSecureServer({
		key: fs.readFileSync('localhost-privkey.pem'),
		cert: fs.readFileSync('localhost-cert.pem')
	}),
	tls: true,
	port: 4433
});


server.route({
	method: 'POST',
	path: '/volunteers',
	options: {
		payload: {
			parse: true,
			output: 'data'
		}
	},
	handler: (request, h) => {
		var
		data = request.payload;     // data is the payload from the request

		console.log(data);

		return h
		.response({data: 'ok', success: true})
		.type('application/json')
		.code(201);
	}
});

const init = async () => {

	await server.start();
	console.log(`Server running at: ${server.info.uri}`);


};

process.on('unhandledRejection', (err) => {

	console.log(err);
	process.exit(1);
});

init();