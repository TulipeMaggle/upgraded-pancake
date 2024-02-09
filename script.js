const main = document.querySelector(".main");

const bouton = document.querySelector("#bouton");

console.log(bouton);

var toggled = false;

bouton.addEventListener("click", () => {
  if (!toggled) {
    main.classList.add("clicked");
    console.log(toggled);
  } else {
    main.classList.remove("clicked");
  }
  toggled = !toggled;
});
