function bracesValid(string){
    stack = [];
    for (var i=0; i<string.length; i++){
        if (string[i] == "(" || string[i] == "[" || string[i] == "{"){
            stack.push(string[i]);
        }
        else {
            if (string[i] == ")" && stack[stack.length-1] == "("){
                stack.pop();
            }
            else if (string[i] == "]" && stack[stack.length-1] == "["){
                stack.pop();
            }
            else if (string[i] == "}" && stack[stack.length-1] == "{"){
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    if (stack.length == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));