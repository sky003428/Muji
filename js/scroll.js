let scroll = [];
const header = document.querySelector('header');
const sliderBanner = document.querySelector('#sliderBanner');


window.addEventListener("scroll", () => {
    // console.log(sliderBanner.getBoundingClientRect().top);
    if (sliderBanner.getBoundingClientRect().top <= 0) {
        // console.log(window.scrollY);
        scroll.push(window.scrollY);

        if (scroll[1] < scroll[0]) {
            header.style.top = 0 + 'px';
            header.style.display = 'block';
            header.style.position = 'fixed';
        }
        else {
            header.style.top = -(header.getBoundingClientRect().height) + 'px';
        }
        if (scroll.length > 2) scroll.shift();
        // console.log(scroll.length);
        // console.log(window.innerWidth);
    }

});