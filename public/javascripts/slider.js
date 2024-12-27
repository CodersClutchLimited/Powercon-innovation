// car-container-1 carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Number of visible cards
    spaceBetween: 20, // Space between slides in pixels
    loop: true, // Enable looping
    autoplay: {
        delay: 3000, // Time between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay even after user interaction
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4, // Desktop view
      },
      768: {
        slidesPerView: 2, // Tablet view
      },
      480: {
        slidesPerView: 1, // Mobile view
      },
    },
});
