const hero = document.querySelector(".activeHero");
const choose_q = document.querySelector(".choose_q");
const choose_r = document.querySelector(".choose_r");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".quit");
const restart = info_box.querySelector(".restart");
const rlesson_box = document.querySelector(".rlesson_box");
const qlesson_box = document.querySelector(".qlesson_box");
const back_btn = document.querySelector(".back_btn");


choose_r.onclick = ()=>{
    rlesson_box.classList.add("activeRlesson");
}

choose_q.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

restart.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    qlesson_box.classList.add("activeQlesson");
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}
back_btn.onclick = ()=>{
    rlesson_box.classList.remove("activeRlesson");
}


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
