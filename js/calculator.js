let calculator = (function() {
  let num1 = 0;
  let num2 = 0;
  let operator = "";

  let getNum = function() {
    num1 = parseFloat(calcInputScreen.value);
    return num1;
  }

  let solveIt = function() {
   if(operator === "plus") {
     num2 = parseFloat(calcInputScreen.value);
     let sum = num1 + num2;
     calcScreen.value = sum;
     calcInputScreen.value = sum;
   } else if(operator === "minus") {
    num2 = parseFloat(calcInputScreen.value);
    let diff = num1 - num2;
    calcScreen.value = diff;
    calcInputScreen.value = diff;
   } else if(operator === "times") {
    num2 = parseFloat(calcInputScreen.value);
    let product = num1 * num2;
    calcScreen.value = product;
    calcInputScreen.value = product;
  } else if(operator === "divide") {
    num2 = parseFloat(calcInputScreen.value);
    let quot = num1 / num2;
    calcScreen.value = quot;
    calcInputScreen.value = quot;
    }
  } 

  let addIt = function() {
    num1 = parseFloat(calcInputScreen.value);
    operator = "plus";
    calcInputScreen.value = "";
  }

  let subtractIt = function() {
    num1 = parseFloat(calcInputScreen.value);
    operator = "minus";
    calcInputScreen.value = "";
  }

  let multiplyIt = function() {
    num1 = parseFloat(calcInputScreen.value);
    operator = "times";
    calcInputScreen.value = "";
  }

  let divideIt = function() {
    num1 = parseFloat(calcInputScreen.value);
    operator = "divide";
    calcInputScreen.value = "";
  }

  return {
    getNum: getNum,
    solveIt: solveIt,
    addIt: addIt,
    subtractIt: subtractIt,
    multiplyIt: multiplyIt,
    divideIt: divideIt
  }

}());

