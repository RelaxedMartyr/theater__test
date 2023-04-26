"use strict";

var swiper3 = new Swiper( ".Swiper3", {
    spaceBetween:80,
   loop:true,
    autoplay: {
   delay: 3000,
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.5,
    
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2.5,
     
    },
     1440:{
        slidesPerView:4,
     }
  }
    } );
