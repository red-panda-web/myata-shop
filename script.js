"use strict"

document.addEventListener("DOMContentLoaded", function () {

	new Swiper('.under-header__slider', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		slideClass: 'under-header__slide',
		wrapperClass: 'under-header__slider-wrap',

		pagination: {
			el: '.under-header__pagination',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
		},
	})
});