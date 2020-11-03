//NAVBAR
var navBar = document.getElementById("nav-lists");
function Show() {
navBar.classList.add("_Menus-show");
}

function Hide(){
navBar.classList.remove("_Menus-show");
}


// DARKMODE
function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");

   var cardText = document.querySelectorAll('.text-color2');
   cardText.classList.toggle("text-color2-dark-mode");
}