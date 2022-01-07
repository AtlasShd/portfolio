'use strict';

document.querySelector('.blackAndWhite').addEventListener('click', function (e) {
	e.target.classList.toggle('blackAndWhite_black');
	document.querySelector('.header').classList.toggle('header__white-theme');
	document.querySelector('.hero').classList.toggle('hero__white-theme');
	document.querySelector('.skills').classList.toggle('skills__white-theme');
	document.querySelector('.portfolio').classList.toggle('portfolio__white-theme');
	document.querySelector('.video').classList.toggle('video__white-theme');
	document.querySelector('.price').classList.toggle('price__white-theme');
	document.querySelector('.contacts').classList.toggle('contacts__white-theme');
	document.querySelector('.footer').classList.toggle('footer__white-theme');
	document.querySelector('.burger').classList.toggle('burger__white-theme');
	document.querySelector('.burgermenu').classList.toggle('burgermenu__white-theme');
});
