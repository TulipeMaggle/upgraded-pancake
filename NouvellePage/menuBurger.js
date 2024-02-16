const checkbox = document.querySelector("#toggleMenu");
const navListBurger = document.querySelector(".nav-list-burger");

checkbox.addEventListener("click", (event) => {
  if (!event.target.checked) {
    navListBurger.classList.add("active-menu");
  } else {
    navListBurger.classList.remove("active-menu");
  }
});
