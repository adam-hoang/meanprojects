function fizzBuzz(n){
    if (isNaN(n) == true || n < 0){
        console.log("Must be positive number!");
        return null;
    } 
    for (var i=1; i<n+1; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

function fizzBuzzString(n){
    if (isNaN(n) == true || n < 0){
        console.log("Must be positive number!");
        return null;
    } 
    var output = "";
    for (var i=1; i<n+1; i++){
        if ( i == n){    
            if (i % 3 == 0 && i % 5 == 0){
                output += "and FizzBuzz.";
            }
            else if (i % 3 == 0){
                output += "and Fizz.";
            }
            else if (i % 5 == 0){
                output += "and Buzz.";
            }
            else {
                output += "and "+i+".";
            }
        }
        else {
            if (i % 3 == 0 && i % 5 == 0){
                output += "FizzBuzz, ";
            }
            else if (i % 3 == 0){
                output += "Fizz, ";
            }
            else if (i % 5 == 0){
                output += "Buzz, ";
            }
            else {
                output += i+", ";
            }
        }
    }
    console.log(output);
}

fizzBuzz(15);
fizzBuzz("fifteen");
fizzBuzz(-15);
fizzBuzzString(15);