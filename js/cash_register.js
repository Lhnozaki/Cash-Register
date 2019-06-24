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
let blBtn = document.querySelector("#BL");
let balance = document.querySelector("#Balance");
let clear = document.querySelector("#CL");
let calcInputScreen = document.querySelector("#calcInputs");
let numbers = document.querySelectorAll(".number");

/// Modal Functions
testBtn.addEventListener("change", function() {
  let slider = document.querySelectorAll(".slider")[0];
  if(this.value === "Select-Color") {
    console.log("Please choose a color");
  } else if(this.value == "Green") {
    shoe[0].src = "/assets/Shoe 2/1.jpg";
    shoe[1].src = "/assets/Shoe 2/2.jpg";
    shoe[2].src = "/assets/Shoe 2/3.jpg";
    shoe[3].src = "/assets/Shoe 2/4.jpg";
    shoe[4].src = "/assets/Shoe 2/5.jpg";
    shoe[5].src = "/assets/Shoe 2/6.jpg";
    modal.style.display = "flex";
  } else if(this.value == "Pink") {
    shoe[0].src = "/assets/Shoe 1/1.jpg";
    shoe[1].src = "/assets/Shoe 1/2.jpg";
    shoe[2].src = "/assets/Shoe 1/3.jpg";
    shoe[3].src = "/assets/Shoe 1/4.jpg";
    shoe[4].src = "/assets/Shoe 1/5.jpg";
    shoe[5].src = "/assets/Shoe 1/6.jpg";
    modal.style.display = "flex";
  } else if(this.value == "White") {
    shoe[0].src = "/assets/Shoe 3/1.jpg";
    shoe[1].src = "/assets/Shoe 3/2.jpg";
    shoe[2].src = "/assets/Shoe 3/3.jpg";
    shoe[3].src = "/assets/Shoe 3/4.jpg";
    shoe[4].src = "/assets/Shoe 3/5.jpg";
    shoe[5].src = "/assets/Shoe 3/6.jpg";
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
  balance.value = `$${startBalance}`;
  if(startBalance > 0){
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
})


numbers.forEach(function(e) {
  e.addEventListener("click", function() {
    calcInputScreen.value += this.textContent;
    })
})

