
const buttonswipe = document.querySelector("#button-swipe")
const text2 = document.querySelector(".text2")
const text = document.querySelector(".text")



buttonswipe.addEventListener("click", () => {    
        text.classList.add("cachertexte")
      
    })
    
var variable = false;

buttonswipe.addEventListener("click", () => {
  if (variable > 0) {
    text.classList.add("cachertexte")
    text2.classList.remove("cachertexte")
    console.log(variable + "dddd");
    variable = 0
  } else {
    text.classList.remove("cachertexte")
    text2.classList.add("cachertexte")
    variable = 1
  }
})