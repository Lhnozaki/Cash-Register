/// Declare UI Variables
let testBtn = document.querySelector("#selectOne");
let modal = document.querySelector("#modal");
let closeBox = document.querySelector("#closeBox");
let shoe = document.querySelectorAll(".shoe");
let cart = document.querySelector("#cart");
let subtotal = document.querySelector("#Subtotal");
let quantity = document.querySelector("#quantity");
let price = 100.00;
let tax = document.querySelector("#Tax");
let total = document.querySelector("#Total");
let startBalance = 300;
let newBalance = startBalance;
let blBtn = document.querySelector("#BL");
let balance = document.querySelector("#Balance");
let clear = document.querySelector("#CL");
let calcInputScreen = document.querySelector("#calcInputs");
// let calcScreen = document.querySelector("#calcScreen");
let numbers = document.querySelectorAll(".number");
let decimal = document.querySelector("#decimal");
let dpBtn = document.querySelector("#DP");
let wdBtn = document.querySelector("#WD");
let payAmount = document.querySelector("#pay");
let payment = document.querySelector("#Payment");
let change = document.querySelector("#Change");
let add = document.querySelector("#add");
let substract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let equals = document.querySelector("#equals");

/// Modal Functions
testBtn.addEventListener("change", function() {
  if(this.value === "Select-Color") {
    console.log("Please choose a color");
  } else if(this.value == "Green") {
    shoe[0].src = "assets/Shoe 2/1.jpg";
    shoe[1].src = "assets/Shoe 2/2.jpg";
    shoe[2].src = "assets/Shoe 2/3.jpg";
    shoe[3].src = "assets/Shoe 2/4.jpg";
    shoe[4].src = "assets/Shoe 2/5.jpg";
    shoe[5].src = "assets/Shoe 2/6.jpg";
    modal.style.display = "flex";
  } else if(this.value == "Pink") {
    shoe[0].src = "assets/Shoe 1/1.jpg";
    shoe[1].src = "assets/Shoe 1/2.jpg";
    shoe[2].src = "assets/Shoe 1/3.jpg";
    shoe[3].src = "assets/Shoe 1/4.jpg";
    shoe[4].src = "assets/Shoe 1/5.jpg";
    shoe[5].src = "assets/Shoe 1/6.jpg";
    modal.style.display = "flex";
  } else if(this.value == "White") {
    shoe[0].src = "assets/Shoe 3/1.jpg";
    shoe[1].src = "assets/Shoe 3/2.jpg";
    shoe[2].src = "assets/Shoe 3/3.jpg";
    shoe[3].src = "assets/Shoe 3/4.jpg";
    shoe[4].src = "assets/Shoe 3/5.jpg";
    shoe[5].src = "assets/Shoe 3/6.jpg";
    modal.style.display = "flex";
  }
})

/// Modal "Close" button
closeBox.addEventListener("click", function() {
  modal.style.display = "none";
});

/// Add to cart button
cart.addEventListener("click", function() {
  let newSubtotal = price * quantity.value;
  subtotal.value = `$${newSubtotal}`;
  let newTax = newSubtotal * .04;
  tax.value = `$${newTax}`;
  let newTotal = newSubtotal + newTax;
  total.value = `$${newTotal}`;
})

/// Balance button
blBtn.addEventListener("click", function() {
  balance.value = `$${newBalance}`;
  if(newBalance > 0){
    balance.style.color = "aqua";
  } else {
    balance.style.color = "red";
  }
})

/// Clear button
clear.addEventListener("click", function() {
  subtotal.value = "";
  tax.value = "";
  total.value = "";
  balance.value = "";
  calcInputScreen.value = "";
  payment.value = "";
  change.value = "";
  // calcScreen.value = "";
})

/// Number keys to the calc display
numbers.forEach(function(e) {
  e.addEventListener("click", function() {
      calcInputScreen.value += this.textContent;
    })
})

/// Decimal Key
decimal.addEventListener("click", function() {
  if(calcInputScreen.value.includes(".") === false) {
    calcInputScreen.value += this.textContent;
  } else {
    calcInputScreen.value;
  }
})

/// Deposit Button
dpBtn.addEventListener("click", function() {
  if(calcInputScreen.value === "") {
    alert("enter deposit amount");
  } else {
  newBalance = newBalance + parseFloat(calcInputScreen.value);
  balance.value = `$${newBalance}`;
  if(newBalance > 0) {
    balance.style.color = "aqua";
  } else {
    balance.style.color = "red";
  }
}
})

/// Withdraw Button 
wdBtn.addEventListener("click", function() {
  if(calcInputScreen.value === "") {
    alert("enter withdraw amount");
  } else {
  newBalance = newBalance - parseFloat(calcInputScreen.value);
  balance.value = `$${newBalance}`;
  if(newBalance <= 0) {
    balance.style.color = "red";
  } else {
    balance.style.color = "aqua";
  }
}
})

/// Pay button
payAmount.addEventListener("click", function() {
  payment.value = `$${calcInputScreen.value}`;
  calcInputScreen.value = "";
  let payVal = parseFloat(payment.value.substr(1));
  let totVal = parseFloat(total.value.substr(1));

  if(payment.value === "$") {
    alert("please enter payment amount");
  }

  if(total.value === "") {
    alert("Please add item to cart");
  }

  if(payVal === totVal) {
    change.value = "$0";
    newBalance = newBalance + payVal;
    balance.value = `$${newBalance}`;

  } else if(payVal > totVal) {
    let posChange = payVal - totVal;
    change.value = `$${posChange}`;
      if(newBalance <= posChange) {
        alert("Not enough funds in balance. Please deposit more money.");
        balance.value = `($${newBalance})`;
        balance.style.color = "orange";
      } else {
        newBalance = newBalance + payVal;
        newBalance = newBalance - posChange;
        balance.value = `$${newBalance}`;
      }

  } else if(payVal < totVal) {
    alert("Not enough payment");
    change.value = `$-${totVal - payVal}`;
    change.style.color = "red";
  }
})

/// EQ buttons & Calculator functions
add.addEventListener("click", function() {
  calculator.addIt();
})

substract.addEventListener("click", function() {
  calculator.subtractIt();
})

multiply.addEventListener("click", function() {
  calculator.multiplyIt();
})

divide.addEventListener("click", function() {
  calculator.divideIt();
})

equals.addEventListener("click", function() {
  calculator.solveIt();
})


