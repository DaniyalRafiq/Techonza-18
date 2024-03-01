$(document).ready(function () {
  $(".aphabet-item").click(function () {
    $(this)
      .addClass("active")
      .closest(".alphabet")
      .find(".aphabet-item")
      .not(this)
      .removeClass("active");
  });
  $(".menu").click(function () {
    $(".header_navbar").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".filter_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".filter-btn").click(function () {
    $(".filters").toggle();
  });

  $(".filters button").click(function () {
    const filter = $(this).data("filter");
    applyFilter(filter);
  });

  function applyFilter(filter) {
    // Add your logic to apply the selected filter
    console.log(`Filter Applied: ${filter}`);
  }

  var offer = new Swiper(".latest_offer_main", {
    slidesPerView: "auto",
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next.offer_btn_next",
      prevEl: ".swiper-button-prev.offer_btn_prev",
    },
  });

  var subStoreSwipers = document.querySelectorAll(".category_cards_catainer");

  subStoreSwipers.forEach(function (swiperElement) {
    new Swiper(swiperElement.querySelector(".swiper"), {
      spaceBetween: 10,
      slidesPerView: "auto",
      pagination: {
        el: swiperElement.querySelector(".swiper-pagination"), // Use pagination element inside the Swiper container
        clickable: true,
      },
      navigation: {
        prevEl: swiperElement.querySelector(".swiper-button-prev"),
        nextEl: swiperElement.querySelector(".swiper-button-next"),
      },
    });
  });

  var offer = new Swiper(".alphabet", {
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next.aplhabet_btn_next",
      prevEl: ".swiper-button-prev.aplhabet_btn_prev",
    },
  });
  var mainSlider = new Swiper(".mySwiper2", {
    parallax: true,
    speed: 1200,
    effect: "slide",
    direction: "vertical",
    autoplay: true,
    navigation: {
      nextEl: ".upk-button-next",
      prevEl: ".upk-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>'
        );
      },
    },
  });

  var heroSwiper = new Swiper(".hero_wrapper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Adjust the delay in milliseconds (e.g., 5000 for 5 seconds)
      disableOnInteraction: false, // Autoplay will not be disabled on interaction with the swiper
    },
    speed: 1000, 

    thumbs: {
      swiper: new Swiper(".hero_thum_main", {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 0,
        autoplay: {
          delay: 5000, // Adjust the delay in milliseconds (e.g., 5000 for 5 seconds)
          disableOnInteraction: false, // Autoplay will not be disabled on interaction with the swiper
        },
        speed: 1000, 
      }),
    },
  });

  $('#forminput').focus(function(){
    $('.header_form_result').slideDown()
  });
  $('#forminput').blur(function(){
    $('.header_form_result').slideUp();
});
});
