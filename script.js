const icon = document.querySelector(".fa");
const list = document.querySelector(".navlistcontainer");
const divBlur = document.querySelector(".navblur");
const pizza = document.querySelectorAll(".pizza");
const zoomscreen = document.querySelector(".zoomscreen");
 

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});

divBlur.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});
  for (let i = 0; i < pizza.length; i++) {
    pizza[i].onclick = function () {
      console.log(pizza[i].id);
      pizza[i].classList.toggle("pizza-pop");
      zoomscreen.classList.toggle("zoomscreen-visible");
     let element = document.getElementById[i];
     
    }
    
  }
  
