"use strict"

document.addEventListener("DOMContentLoaded", function () {

	//slider 
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
		if (document.body.clientWidth < 767) clearOldActiveTabs();

		let tab_trigger = document.querySelector('.js-trigger[data-tab="' + id + '"]');
		let tab_content = document.querySelector('.js-tabContent[data-tab="' + id + '"]');

		let active_tab = document.querySelector(".js-trigger.active");
		let active_content = document.querySelector(".js-tabContent.active");

		if (tab_trigger === active_tab && document.body.clientWidth < 767) {
			active_tab.classList.remove("active");
			active_content.classList.remove("active");
		}
		else {
			if (active_tab != null) active_tab.classList.remove("active");
			if (active_content != null) active_content.classList.remove("active");

			tab_trigger.classList.add("active");
			tab_content.classList.add("active");
		}
	}

	let tabs_triggers = document.querySelectorAll(".js-trigger");

	function clearOldActiveTabs() {
		let oldActiveTrigger = document.querySelector(".tabs__item.active");
		if (oldActiveTrigger != null) oldActiveTrigger.classList.remove("active");
		let oldActiveContent = document.querySelector(".row-items.active");
		if (oldActiveTrigger != null) oldActiveContent.classList.remove("active");
	}

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

	// catalog button
	document.querySelector(".menu-catalog__name").addEventListener("click", function () {
		if (document.body.clientWidth < 767) {
			document.querySelector(".menu-catalog-lvl1").classList.toggle("active");
		}
	})

	//Второй уровень меню пункта "Фототорт"
	document.querySelector(".photocake__menu").addEventListener("click", function () {
		if (document.body.clientWidth < 767) {
			document.querySelector(".menu-catalog-lvl2").classList.toggle("active");
		}
	})

	//Кнопка "назад" на втором уровне меню
	document.querySelector(".menu-back-btn").addEventListener("click", function () {
		if (document.body.clientWidth < 767) {
			document.querySelector(".menu-catalog-lvl2").classList.remove("active");
		}
	})

	// Кнопка открытия меню-бургера
	document.querySelector(".burger-icon").addEventListener("click", function () {
		document.querySelector(".burger-body").classList.add("active");
		document.body.style.position = 'fixed';
	})

	// Кнопка закрытия меню-бургера
	document.querySelector(".close-burger").addEventListener("click", function () {
		document.querySelector(".burger-body").classList.remove("active");
		document.body.style.position = '';
	})

	document.querySelectorAll(".js-burger-item").forEach((item) => {
		item.addEventListener("click", function () {
			document.querySelector(".burger-body").classList.remove("active");
			document.body.style.position = '';
		})
	})


	window.addEventListener("resize", function () {
		let active_tab = document.querySelector(".js-trigger.active");

		if (active_tab == null && document.body.clientWidth > 730) change_tab(1);

		if (active_tab == null && document.body.clientWidth < 730) change_tab(4);

	}, false)
});

