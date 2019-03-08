function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " +this.name+ "!");
    }
    this.showStats = function(){
        console.log("Name: " +this.name+ ", Health: " +this.health+ ", Speed: " +speed+ ", Strength: " +strength)
    }
    this.drinkSake = function(){
        this.health += 10;
    }
    this.punch = function(x){
        if (this instanceof Ninja == true){
            x.health -= 5;
            console.log(x.name+ " was punched by " +this.name+ " and lost 5 Health!");
        }
        else {
            console.log(this.name+ " must be a ninja in order to punch!");
        }
    }
    this.kick = function(x){
        if (this instanceof Ninja == true){
            x.health -= (15*strength);
            console.log(x.name+ " was kicked by " +this.name+ " and lost "+ 15*strength+ " Health!")
        }
        else {
            console.log(this.name+ " must be a ninja in order to kick!");
        }

    }
}

function FakeNinja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.punch = function(x){
        if (this instanceof Ninja == true){
            x.health -= 5;
            console.log(x.name+ " was punched by " +this.name+ " and lost 5 Health!");
        }
        else {
            console.log(this.name+ " must be a ninja in order to punch!");
        }
    }
    this.kick = function(x){
        if (this instanceof Ninja == true){
            x.health -= (15*strength);
            console.log(x.name+ " was kicked by " +this.name+ " and lost "+ 15*strength+ " Health!")
        }
        else {
            console.log(this.name+ " must be a ninja in order to kick!");
        }

    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();
var fakeNinja = new FakeNinja("FakeNinja");
fakeNinja.punch(blueNinja);
fakeNinja.kick(redNinja);