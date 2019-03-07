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
var bgColor = 'white';
io.on('connection', function (socket) {
    socket.on('connected', function (data) {
        socket.emit('color', {response: bgColor});
    });
    socket.on('green', function (data) {
        bgColor = "lightgreen";
        io.emit('color', {response: bgColor});
    });
    socket.on('blue', function (data) {
        bgColor = "lightblue";
        io.emit('color', {response: bgColor});
    });
    socket.on('pink', function (data) {
        bgColor = "lightpink";
        io.emit('color', {response: bgColor});
    });
});
