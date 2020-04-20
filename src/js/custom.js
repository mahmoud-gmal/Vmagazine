

$(document).ready(function () {

// Start Custom Navbar
// function navSlide() {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".navbar-custom .nav-list-container");
//     const navToggle = document.querySelector(".nav-toggle");
//     const navLinks = document.querySelectorAll(".nav-list-container li");
//     const vmMbNavWrap = document.querySelector(".vmagazine-lite-mobile-nav-wrapp");
//     const vmMbNavWrapper = document.querySelector(".vmagzine-mobile-navigation-wrapper");
    

//     navToggle.addEventListener("click", () => {
//       vmMbNavWrap.classList.add('d-none');
//       vmMbNavWrapper.classList.add('d-block');
//     });



//     burger.addEventListener("click", () => {

//       vmMbNavWrap.classList.remove('d-none');
//       vmMbNavWrapper.classList.remove('d-block');

//         //Toggle Nav
//         nav.classList.toggle("nav-active");
        
//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ""
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle("toggle");
//     });
    
// }

// navSlide();

/* once clicked on nav-toggle it hide custom navbar in 'vmagazine-lite-mobile-nav-wrapp' and show custom navbar in 'vmagzine-mobile-navigation-wrapper' */

const fullScreenNavToggle = () => {

const navToggle = $(".nav-toggle");
const burger = $(".burger");
const vmMbNavWrapper = $(".vmagzine-mobile-navigation-wrapper");

navToggle.bind("click", () => {
  vmMbNavWrapper.addClass('nav-show');
});

burger.bind("click", () => {
  vmMbNavWrapper.removeClass('nav-show');
});


}
fullScreenNavToggle();


function searchCustom(){
  const searchEl = document.querySelector(".navbar-search .search-close")
  const vmMbsearchWrapper = document.querySelector(".vmagzine-mobile-search-wrapper")
  searchEl.addEventListener("click", () => {
    vmMbsearchWrapper.classList.add('d-block');
  });
}
searchCustom();
// End Custom Navbar  

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     $(".navbar-custom").css({ top: '0'});
//   } else {
//     $(".navbar-custom").css({ top: '-60px', position: 'fixed' });
//   }
//   prevScrollpos = currentScrollPos;
// };


/* Animate css */




/* dropdown on hover */
$('.navbar ul li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });




// Start News auto slider bar 
$('.news-auto-slider-bar').owlCarousel({
    loop:true,
    items:1,
    mouseDrag:false,
    navText:["<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"],
    nav:true,
    dots:false,
    autoplayTimeout:3000,
    autoplay:true,
    // animateOut: 'slideOutUp',
    // animateIn: 'slideInUp',


});
// End News auto slider bar 
 
// start news-slide-diff-cats
$('.news-slide-diff-cats').owlCarousel({
    loop:true,
    items:1,
    mouseDrag:false,
    nav:true,
    autoplayTimeout:5000,
    autoplay:false,
    navText:["<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"]

});
// End news-slide-diff-cats

// Start Featured News
$('.featured-news-slider').owlCarousel({
    loop:true,
    mouseDrag:false,
    nav:true,
    margin:10,
    autoplayTimeout:5000,
    autoplay:false,
    navText:["<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"],
    responsive : {
      0:{
        items:1
      },

      540: {
        items: 2
      },

      767: {
        items:3
      },

      992: {
        items:4
      }

    }

});
// End Featured News

// Start Trending News Slider
$('.trending-news-slider').owlCarousel({
    loop:true,
    items:4,
    mouseDrag:false,
    nav:true,
    autoplayTimeout:5000,
    autoplay:false,
    margin:20,
    navText:["<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>"],
    responsive : {
      0:{
        items:1
      },

      540: {
        items: 2
      },

      767: {
        items:3
      },
      
      992: {
        items:4
      }

    }

});
// End Trending News Slider



})


