var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        // when window width is >= 480px
        400: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
  })