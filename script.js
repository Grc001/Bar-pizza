const icon = document.querySelector(".fa");
const list = document.querySelector(".navlistcontainer");
const divBlur = document.querySelector(".navblur");
//const pizza = document.querySelector(".pizza");


icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

divBlur.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});
/*pizza.addEventListener("click", function () {
  pizza.classList.toggle("pizza-pop");
})*/