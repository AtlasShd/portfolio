'use strict';

window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.burgermenu__burger').addEventListener('click', function () {
		toggleBurger();
	});

	document.querySelectorAll('.burger-nav__link').forEach(item => {
		item.addEventListener('click', function () {
			hideBurger();
		});
	});

	document.querySelector('.shadow').addEventListener('click', function () {
		hideBurger();
	});

	document.querySelector('.burger').addEventListener('click', function () {
		hideBurger();
	});

	function showBurger() {
		document.querySelector('.burgermenu__menu').classList.add('burgermenu__cross');
		document.querySelector('.burger__nav').classList.add('burger__nav_show');
		document.querySelector('.shadow').classList.add('shadow__show');
		document.body.classList.add('body-hidden');
	}

	function hideBurger() {
		document.querySelector('.burgermenu__menu').classList.remove('burgermenu__cross');
		document.querySelector('.burger__nav').classList.remove('burger__nav_show');
		document.querySelector('.shadow').classList.remove('shadow__show');
		document.body.classList.remove('body-hidden');
	}

	function toggleBurger() {
		document.querySelector('.burgermenu__menu').classList.toggle('burgermenu__cross');
		document.querySelector('.burger__nav').classList.toggle('burger__nav_show');
		document.querySelector('.shadow').classList.toggle('shadow__show');
		document.body.classList.toggle('body-hidden');
	}
});