
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



function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kojoke.onlineshop@gmail.com",
        Password : "Kojoke123.",
        To : 'kojoke.onlineshop@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Quiznism Contact Form",
        Body : "Full Name: " + document.getElementById("name").value 
                +" <br> Email: " + document.getElementById("email").value 
                + "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("Sent Successfully!")
    );
}