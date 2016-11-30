var input = prompt("Enter the dollar amount");

var inputValue = document.getElementById("input");
var outputValue = document.getElementById("output");
inputValue.innerHTML = input;

var quarters;
var dimes;
var nickles;
var pennies;
var coinPurse = { quarters, dimes, nickles, pennies};

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  
  coinPurse.quarters = parseInt(input / .25);
  coinPurse.dimes = parseInt((input % .25) / .10);
  coinPurse.nickles = parseInt(((input % .25) % .10 )/ .05);
  coinPurse.pennies = parseInt((((input % .25) % .10 ) % .05) / .01);

  return coinPurse;
  
  
}

var coins = coinCounter()
console.log(coins);
 // coins = coins.toString();
function display () {  
	  
	 for (var prop in coins) {
	 	console.log(prop,coins[prop]) ;	
	 	 if (prop !==  "pennies") {
	 	 outputValue.innerHTML+=  prop + " : " + coins[prop] + " " + " , " + " <br>";
	 	}
	 	 if (prop === "pennies") {
	 	 	outputValue.innerHTML +=  prop + " : " + coins[prop] + "<br>" + "} ";
	 	 } 
	 	 
	 }
	 
 }
 display();


 
