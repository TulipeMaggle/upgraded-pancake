const main = document.querySelector(".main");

const docsidebar = document.querySelector(".sidebar")

const bouton = document.querySelector("#bouton");

const sidebarbutton = document.querySelector("#sidebar")

const buttonswipe = document.querySelector("#button-swipe")

const text2 = document.querySelector("#text2")
const text = document.querySelector(".text")

console.log(sidebarbutton);

var toggled = false;

bouton.addEventListener("click", () => {
  if (!toggled) {
    main.classList.remove("clicked2");
    main.classList.add("clicked");
    console.log(toggled);
  } else {
    main.classList.add("clicked2");
    main.classList.remove("clicked");
  }
  toggled = !toggled;
});

var sidebar = false;

sidebarbutton.addEventListener("click", function affichersidebar() {
  console.log(sidebar);
  if (sidebar > 0) {
    docsidebar.classList.remove("clickonsidebar")
    console.log(sidebar + "dddd");
    sidebar = 0
  } else {
    docsidebar.classList.add("clickonsidebar")
    sidebar = 1
  }
})

buttonswipe.addEventListener("click", function affichersidebar() {
console.log();

    text2.id.remove("cachertexte")
  
})

