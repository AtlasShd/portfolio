'use strict';

let currentTheme = 'dark';

window.addEventListener('beforeunload', function () {
	this.localStorage.setItem('theme', currentTheme);
});

window.addEventListener('load', function () {
	if (this.localStorage.getItem('theme')) {
		ourTheme(this.localStorage.getItem('theme'));
	}
});

document.querySelector('.blackAndWhite').addEventListener('click', changeTheme);

function changeTheme() {
	document.querySelector('.blackAndWhite').classList.toggle('blackAndWhite_black');
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
	if (document.querySelector('.blackAndWhite').classList.contains('blackAndWhite_black')) {
		currentTheme = 'white';
	} else {
		currentTheme = 'dark';
	}
}

function ourTheme(theme) {
	if (theme == 'white') {
		changeTheme();
	}
}