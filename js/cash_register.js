/// Declare Variables
let testBtn = document.querySelector("#selectOne");
let modal = document.querySelector("#modal");
let closeBox = document.querySelector("#closeBox");
let shoe = document.querySelectorAll(".shoe");

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