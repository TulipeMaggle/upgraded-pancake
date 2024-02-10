const main = document.querySelector(".main");

const docsidebar = document.querySelector(".sidebar")

const bouton = document.querySelector("#bouton");

const sidebarbutton = document.querySelector("#sidebar")

console.log(sidebarbutton);

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

var sidebar = false;

sidebarbutton.addEventListener("click", function affichersidebar() {
  console.log(sidebar);
  if (sidebar > 0) {
    docsidebar.classList.remove("clickonsidebar")
    console.log(sidebar + "dddd");
    sidebar = 0
  } else {
    docsidebar.classList.add("clickonsidebar")
    sidebar = sidebar + 1
  }
})