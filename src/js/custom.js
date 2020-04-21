

$(document).ready(function () {

  // Trigger AOS Animations
  AOS.init({
    once: true,
    easing: 'ease',
    disable: 'mobile',
    throttleDelay: 199
  });


// fullScreenNavToggle
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
// End fullScreenNavToggle  

// dropdown on hover 
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
    autoplayTimeout:2300,
    autoplay:true,
    autoplayHoverPause:true,
    animateOut: 'fadeOutUp',
    animateIn: 'fadeInUp'

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


