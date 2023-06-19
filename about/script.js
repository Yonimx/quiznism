const menu = document.querySelector('.menu')
const dropdown_menu = document.querySelector('.dropdown_menu')
onclick="myFunction(this)"

function myFunction(x) {
    x.classList.toggle("change")
    
  }

menu.onclick = function () {
    dropdown_menu.classList.toggle("open")
    menu.classList.toggle("change")
}