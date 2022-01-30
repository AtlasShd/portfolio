'use strict';

window.addEventListener('DOMContentLoaded', function () {
	let currentTime = 0;

	document.querySelectorAll('.portfolio__btn').forEach((btn, index) => {
		btn.addEventListener('click', function (e) {
			currentTime = index;
			clearAllCheck();
			if (e.target.getAttribute('data-time') == 'summer' || e.target.getAttribute('data-time') == 'autumn') {
				e.target.classList.add('_activv');
			} else {
				e.target.classList.add('_active');
			}
			switchTime(btn);
		});
	});

	function clearAllCheck() {
		document.querySelectorAll('.portfolio__btn').forEach((item) => {
			item.classList.remove('_active');
			item.classList.remove('_activv');
		});
	}

	function switchTime(btn) {
		document.querySelectorAll('.portfolio__img').forEach((item, index) => {
			item.classList.remove('_fade');
			const time = btn.getAttribute('data-time');
			item.setAttribute('src', `assets/img/portfolio/${time}/${index}.jpg`);
			item.classList.add('_fade');
			setTimeout(() => {
				item.classList.remove('_fade');
			}, 300);
		});
	}

	function preloadImgs() {
		document.querySelectorAll('.portfolio__btn').forEach(btn => {
			const season = btn.getAttribute('data-time');
			document.querySelectorAll('.portfolio__img').forEach((img, indexImg) => {
				const preloadImg = new Image();
				preloadImg.setAttribute('src', `assets/img/portfolio/${season}/${indexImg}.jpg`);
			});
		});
	}

	preloadImgs();
});
