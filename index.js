let barclick = document.getElementById("barclick");
let mainul = document.getElementById("mainul");
let croseit = document.getElementById("croseit");

barclick.addEventListener("click", function () {
  mainul.classList.remove("hidden");
  mainul.classList.add("flex");
  barclick.classList.add("hidden");
  croseit.classList.toggle("hidden");
})
croseit.addEventListener("click", function () {
  mainul.classList.add("hidden");
  mainul.classList.remove("flex");
  barclick.classList.remove("hidden");
  croseit.classList.toggle("hidden");
})