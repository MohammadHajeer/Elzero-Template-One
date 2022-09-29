// Active class Switcher
let allLinks = document.querySelectorAll(
  ".header .container .links .pages-link li a"
);

allLinks.forEach((link) => {
  link.onclick = () => {
    allLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  };
});

// Mode Switcher with LocaleStorage
let switchButton = document.getElementById("switch-modes");
let switchButtonText = document.querySelector("#switch-modes span");
let switchButtonIcon = document.querySelector("#switch-modes i");
let body = document.body;
if (window.localStorage.Modes === "") {
  body.classList.remove("dark-mode");
  switchButtonText.innerHTML = "Switch To Dark-Mode";
} else if (window.localStorage.Modes === "dark-mode"){
  body.classList.add("dark-mode");
  switchButtonIcon.className = "fa-solid fa-sun";
  switchButtonText.innerHTML = "Switch To Light-Mode";
}
switchButton.onclick = () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    switchButtonIcon.className = "fa-solid fa-moon";
    switchButtonText.innerHTML = "Switch To Dark-Mode";
  } else {
    body.classList.add("dark-mode");
    switchButtonIcon.className = "fa-solid fa-sun";
    switchButtonText.innerHTML = "Switch To Light-Mode";
  }
  window.localStorage.Modes = document.body.classList;
};


