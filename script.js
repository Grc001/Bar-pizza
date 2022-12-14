const icon = document.querySelector(".fa");
const list = document.querySelector(".navlistcontainer");
const divBlur = document.querySelector(".navblur");
const pizza = document.querySelectorAll(".pizza");
const zoomscreen = document.querySelector(".zoomscreen");
const poptext = document.querySelectorAll(".poptext");
const cross = document.querySelectorAll(".fa2");
const fermante = document.querySelector(".fa2-visible");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

divBlur.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

for (let i = 0; i < pizza.length; i++) {
  pizza[i].addEventListener("click", function () {
    pizza[i].classList.toggle("pizza-pop");
    zoomscreen.classList.toggle("zoomscreen-visible");
    poptext[i].classList.toggle("poptext-visible");
    cross[i].classList.toggle("fa2-visible");
   // cross[i].classList.toggle(pizza[i]);
  });
}

// cross[0].addEventListener("click", function () {
// cross[0].classList.remove("fa2");

//  fermante.classList.remove("pizza-pop");
