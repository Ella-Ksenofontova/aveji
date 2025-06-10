const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const backdrop = document.querySelector(".backdrop");

menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains("open")) {
    menuButton.classList.remove("open");
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    menuButton.setAttribute("aria-label", "Открыть меню");
  } else {
    menuButton.classList.add("open");
    menu.classList.add("open");
    backdrop.classList.add("open");
    menuButton.setAttribute("aria-label", "Закрыть меню");
  }
});

const inputs = document.querySelectorAll("#email, #given-name, #phone");

for (let input of inputs) {
  input.addEventListener("focus", event => {
    event.target.previousElementSibling.classList.add("focused");
  });
  input.addEventListener("blur", event => {
    event.target.previousElementSibling.classList.remove("focused");
  });
}

const menuLinks = Array.from(document.querySelectorAll(".menu .nav-link"));

document.body.addEventListener("click", event => {
  if (menuLinks.includes(event.target)) {
    menuButton.classList.remove("open");
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    menuButton.setAttribute("aria-label", "Открыть меню");
  }
})