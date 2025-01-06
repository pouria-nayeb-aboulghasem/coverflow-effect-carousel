const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    effect: "fade",
    speed: 1000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: {
        invert: false,
        forceToAxis: false,
        thresholdDelta: 50,
        sensitivity: 1,
    },
    on: {
        slideChange: function () {
            this.slides.forEach((slide) => {
                let background = slide.querySelector(".background");
                if (background) {
                    background.classList.remove("animation");
                }
            });
            let activeSlide = this.slides[this.activeIndex];
            let background = activeSlide.querySelector(".background");
            if (background) {
                background.classList.add("animation");
            }
        },
    },
});


const vfxSwiper = new Swiper(".vfx__swiper", {
    effect: "coverflow",
    speed: 1000,
    loop: true,
    grabCursor: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 900,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: {
        invert: false,
        thresholdDelta: 50,
        sensitivity: 1
    }
});
