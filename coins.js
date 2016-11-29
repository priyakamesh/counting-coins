var input = prompt("Enter the dollar amount");

var inputValue = document.getElementById("input");
var outputValue = document.getElementById("output");

var inputNode = document.createElement("div");
inputNode.innerHTML = input;
inputValue.appendChild(inputNode);

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = parseInt(input / .25);
  coinPurse.dimes = parseInt((input % .25) / .10);
  coinPurse.nickles = parseInt(((input % .25) % .10 )/ .05);
  coinPurse.pennies = parseInt((((input % .25) % .10 ) % .05) / .01);

  return coinPurse;
  
  
}

var coins = coinCounter()
console.log(coins);
var outputNode = document.createElement("div");
  outputNode.innerHTML = coins;
  outputValue.appendChild(outputNode); 
