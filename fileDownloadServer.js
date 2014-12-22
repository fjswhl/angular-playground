/**
 * Created by lin on 14/12/22.
 */
var express = require('express');
var app = express();

//var handlebars = require('express3-handlebars');
//app.engine('handlebars', handlebars.ExpressHandlebars);
//app.set('view engine', 'handlebars');
app.listen(3000);
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('hello');
});
app.get('/headers', function (req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';
    for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

app.disable('x-powered-by');
