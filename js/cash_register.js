let testBtn = document.querySelector("#selectOne");
let modal = document.querySelector("#modal");


testBtn.addEventListener("change", function() {
  let slider = document.querySelectorAll(".slider")[0];
  if(this.value === "Select-Color") {
    slider.style.display = "none";
    console.log("Please choose a color");
  } else if(this.value == "Green") {
    console.log("You chose Green")
  } else if(this.value == "Pink") {
    modal.style.display = "flex";
  } else if(this.value == "White") {
    console.log("You chose White");
  }
})

let closeBox = document.querySelector("#closeBox");
closeBox.addEventListener("click", function() {
  modal.style.display = "none";
});