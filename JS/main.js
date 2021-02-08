$(document).ready(function(){
   $(".about-slider").slick({
      prevArrow: ".slider-prev",
      nextArrow: ".slider-next",
      infinite: false
   });
});


// Burger Menu
let burgerMenu = document.querySelector(".burger-menu");


burgerMenu.addEventListener("click", ()=> {
   document.querySelector(".menu-list").classList.toggle("active");
   burgerMenu.classList.toggle("active")
})