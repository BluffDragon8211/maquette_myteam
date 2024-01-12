const LOADING = document.getElementById("loading");
const MENUOPEN = document.getElementById("hamburgerlogo");
const MENUCLOSE = document.getElementById("croix");

MENUOPEN.addEventListener("click", () => {
    LOADING.classList.remove("hide");
})

MENUCLOSE.addEventListener("click", () => {
    LOADING.classList.add("hide");
})