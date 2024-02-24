
const buttonswipe = document.querySelector("#button-swipe")
const text2 = document.querySelector(".text2")
const text = document.querySelector(".text")
var variable = false;

buttonswipe.addEventListener("click", () => {
  if (variable > 0) {
    text.classList.add("animationslide")
    text.classList.remove("animationslide2")
    text2.classList.add("animationslide2")
    text2.classList.remove("cachertexte")
    text2.classList.remove("animationslide")
    console.log(variable + "dddd");
    variable = 0
  } else {
    text.classList.remove("animationslide")
    text2.classList.remove("animationslide2")
    text.classList.add("animationslide2")
    text2.classList.add("animationslide")
  
    variable = 1
  }
})