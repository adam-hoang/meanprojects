// 1. original
console.log(hello);                                   
var hello = 'world';                                 
// rewrite
var hello;
console.log(hello);
hello = 'world';
// prediction same as output - undefined

// 2. original
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// rewrite
var needle;
function test(){
    var needle;
    needle = 'magnet'
	console.log(needle);
}
needle = 'haystack';
test();
// prediction same as output - magnet

// 3. original
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// rewrite
var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
//prediction same as output - super cool

// 4. original
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// rewrite
var food;
function eat(){
    var food;
    food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// prediction same as output - chicken, half-chicken

// 5. original
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// rewrite
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = fish;
    console.log(food);
}
console.log(food);
// prediction same as output - mean is not a function

// 6. original
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// rewrite
var genre;
function rewind() {
    var genre;
    genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// prediction same as output - undefined, rock, r&b, disco

// 7. original
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// rewrite
function learn() {
    var dojo;
    dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// prediction same as output - san jose, seattle, burbank, san jose

// 8. original
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// rewrite
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// prediction is same as output - { name: 'Chicago', students: 65, hiring: true } and then break because dojo object cannot be reaasigned