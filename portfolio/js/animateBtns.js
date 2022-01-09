'use strict';

window.addEventListener('DOMContentLoaded', function () {

	function rippler(e) {
		e.preventDefault();
		const ripples = document.createElement('span');

		ripples.style.left = `${e.offsetX}px`;
		ripples.style.top = `${e.offsetY}px`;

		e.target.appendChild(ripples);
		setTimeout(() => {
			ripples.remove();
		}, 500);
	}

	let bubblyTimeout;
	function bubbly(e) {
		e.preventDefault();

		e.target.classList.remove('_bubbly');
		e.target.classList.add('_bubbly');

		bubblyTimeout = setTimeout(() => {
			e.target.classList.remove('_bubbly');
		}, 700);
	}


	document.querySelectorAll('.cards__btn').forEach(btn => {
		btn.addEventListener('click', rippler);
	});

	document.querySelectorAll('.bubbly-btn').forEach(btn => {
		btn.addEventListener('click', bubbly);
	});
});
