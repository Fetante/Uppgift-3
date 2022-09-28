const resultBtn = document.querySelector("#btn");
const switchText = document.querySelector("#switchText");

resultBtn.addEventListener("click", function () {
  switchText.innerHTML = "Goodbye World";
});
