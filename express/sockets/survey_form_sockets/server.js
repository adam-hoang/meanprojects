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
    
io.on('connection', function (socket) {
    socket.on('formData', function (data) {
        var random_number = Math.floor((Math.random() * 1000) + 1);
        socket.emit('message', {response: data});
        socket.emit('randomNumber', {response: random_number});
    });  
});
