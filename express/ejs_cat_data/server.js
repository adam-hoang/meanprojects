var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/cat1", function (request, response){
    var cat_array = {
        name: "Cat 1",
        favFood: "mice",
        age: "1",
        sleepingSpots: ["under the bed", "in the sun"],
        pic: "/images/cat1.jpg"
    };
    response.render('details', {cat: cat_array});
})
app.get("/cat2", function (request, response){
    var cat_array = {
        name: "Cat 2",
        favFood: "fish",
        age: "2",
        sleepingSpots: ["on the bed", "on the couch"],
        pic: "/images/cat2.jpg"
    };
    response.render('details', {cat: cat_array});
})
app.get("/cat3", function (request, response){
    var cat_array = {
        name: "Cat 3",
        favFood: "cat nip",
        age: "3",
        sleepingSpots: ["on the hamper", "behind the curtain"],
        pic: "/images/cat3.jpg"
    };
    response.render('details', {cat: cat_array});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})