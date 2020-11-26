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

	//tabs

	function change_tab(id) {
		let tab_trigger = document.querySelector('.js-trigger[data-tab="' + id + '"]');
		let tab_content = document.querySelector('.js-tabContent[data-tab="' + id + '"]');

		let active_tab = document.querySelector(".js-trigger.active");
		active_tab.classList.remove("active");

		let active_content = document.querySelector(".js-tabContent.active");
		active_content.classList.remove("active");

		tab_trigger.classList.add("active");
		tab_content.classList.add("active");
	}

	let tabs_triggers = document.querySelectorAll(".js-trigger");

	tabs_triggers.forEach((item) => {
		item.addEventListener("click", function () {
			let id = this.getAttribute("data-tab");
			change_tab(id);
		});
	});

	//arrows
	let arrow_left = document.querySelector(".arrow-left");
	arrow_left.addEventListener("click", function () {
		let active_tab = document.querySelector(".js-trigger.active");
		let id = active_tab.getAttribute("data-tab");
		if (id > 1) {
			id--;
			change_tab(id)
		}
	});

	let arrow_right = document.querySelector(".arrow-right");
	arrow_right.addEventListener("click", function () {
		let active_tab = document.querySelector(".js-trigger.active");
		let id = active_tab.getAttribute("data-tab");
		if (id < 3) {
			id++;
			change_tab(id);
		}
	});

	// button scroll up
	document.querySelector(".btn-up").addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	})

});