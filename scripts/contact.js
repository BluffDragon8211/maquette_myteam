const FORM = document.querySelector("form");
const INPUTS = document.getElementsByClassName("inputs");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    Array.from(INPUTS).forEach((input) => {
        validate(input);
    })
})

Array.from(INPUTS).forEach((input) => {
    input.addEventListener("change", () => {
        validate(input);
    })
})

function validate(input) {
    let hr = input.nextSibling.nextSibling;
    let small = hr.nextSibling.nextSibling;
    if(input.value.trim() === "") {
        input.classList.add("invalid");
        hr.classList.add("invalidhr");
        small.classList.add("invalid");
        small.classList.remove("hide");
    } else {
        input.classList.remove("invalid");
        hr.classList.remove("invalidhr");
        small.classList.remove("invalid");
        small.classList.add("hide");
    }
}