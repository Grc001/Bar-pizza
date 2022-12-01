
const icon = document.querySelector(".fa");
const list = document.querySelector(".navlistcontainer");

icon.addEventListener("click", function () {

    list.classList.toggle("list-visible");
    icon.classList.toggle("icon-visible");
    console.log(icon);
})