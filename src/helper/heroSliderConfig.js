const interleaveOffset = 0.5;
export const heroSliderConfig = {
    loop: true,
    speed: 1000,
    parallax: true,
    // autoplay: {
    //     delay: 6500,
    //     disableOnInteraction: false,
    // },
    autoplay:false,
    watchSlidesProgress: true,
    on: {
        progress: function () {
            const swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                const slideProgress = swiper.slides[i].progress;
                const innerOffset = swiper.width * interleaveOffset;
                const innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },

        touchStart: function () {
            const swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },

        setTransition: function (speed) {
            const swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        }
    }
}