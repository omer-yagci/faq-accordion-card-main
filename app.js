const button = document.querySelectorAll(".btn-faq");

button.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    removeActiceClasses();
    buttons.parentNode.classList.toggle("active");
  });
});

function removeActiceClasses() {
  button.forEach((but) => {
    but.parentNode.classList.remove("active");
  });
}
