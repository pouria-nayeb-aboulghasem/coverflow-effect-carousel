let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    freeMode: true,
    spaceBetween: 12,
    grabCursor: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,

    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: false
        },
        768: {
            slidesPerView: 3,
            centeredSlides: false
        },
        1150: {
            slidesPerView: 4,
            centeredSlides: false
        }
    }
});