function coinChange(x){
    dollars = Math.floor(x/100);
    dollarChange = x % 100;
    quarters = Math.floor(dollarChange/25);
    quarterChange = dollarChange % 25;
    dimes = Math.floor(quarterChange/10);
    dimeChange = quarterChange % 10;
    nickels = Math.floor(dimeChange/5);
    pennies = dimeChange % 5;

    var denominations = {
        dollars: dollars,
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies
    };
    var denominations2 = {};
    for (var key in denominations){
        if (denominations[key] != 0){
            denominations2[key] = denominations[key];
        }
    }
    return denominations2;
}

function coinChangeOptimal(x){
    if (!x.dollars){
        x.dollars = 0;
    }
    if (!x.quarters){
        x.quarters = 0;
    }
    if (!x.dimes){
        x.dimes = 0;
    }
    if (!x.nickels){
        x.nickels = 0;
    }
    if (!x.pennies){
        x.pennies = 0;
    }
    var total = (x.dollars*100 + x.quarters*25 + x.dimes*10 + x.nickels*5 + x.pennies);
    dollars = Math.floor(total/100);
    dollarChange = total % 100;
    quarters = Math.floor(dollarChange/25);
    quarterChange = dollarChange % 25;
    dimes = Math.floor(quarterChange/10);
    dimeChange = quarterChange % 10;
    nickels = Math.floor(dimeChange/5);
    pennies = dimeChange % 5;

    var denominations = {
        dollars: dollars,
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies
    };
    var denominations2 = {};
    for (var key in denominations){
        if (denominations[key] != 0){
            denominations2[key] = denominations[key];
        }
    }
    return denominations2;
}

console.log(coinChange(312));
console.log(coinChange(78));
var x = {dollars: 2, dimes: 15, pennies: 5};
console.log(coinChangeOptimal(x));