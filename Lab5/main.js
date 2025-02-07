let touchButton = document.querySelector(".touchButton");
let titleOne = document.querySelector(".titleOne");

touchButton.addEventListener("click", () => {
  titleOne.classList.toggle("active");
});
