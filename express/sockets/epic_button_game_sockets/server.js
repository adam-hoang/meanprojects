var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(1337);
var io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index');
});
var counter = 0;
io.on('connection', function (socket) {
    socket.on('connected', function (data) {
        socket.emit('message', {response: counter});
    });
    socket.on('epic', function (data) {
        counter++;
        io.emit('message', {response: counter});
    });
    socket.on('reset', function (data) {
        counter = 0;
        io.emit('message', {response: counter});
    });
});
