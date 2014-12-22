/**
 * Created by lin on 14/11/19.
 */

var connect = require('connect');

var app = connect
    .use(connect.cookie-parser('tobi is cool'))
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);
        res.end('hello\n');
    }).listen(3000);


