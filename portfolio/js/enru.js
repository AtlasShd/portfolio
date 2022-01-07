'use strict';

import i18Obj from './translate.js';

let currentLang = 'en';

window.addEventListener('load', function () {
	if (this.localStorage.getItem('lang')) {
		currentLang = this.localStorage.getItem('lang');
		switchLang(document.querySelector(`.lang__${currentLang}`));
	}
	console.log(currentLang);
});

window.addEventListener('beforeunload', function () {
	this.localStorage.setItem('lang', currentLang);
});

document.querySelectorAll('.lang__lang').forEach(lang => {
	lang.addEventListener('click', function (e) {
		switchLang(e.target);
	});
});

function switchLang(e) {
	currentLang = e.innerText;
	changeLanguage(currentLang);
	changeColorLang(e);
}

function changeLanguage(lang) {
	for (let key in i18Obj[lang]) {
		document.querySelector(`[data-lng-${key}]`).innerText = i18Obj[lang][key];
	}
}

function changeColorLang(selected) {
	document.querySelectorAll('.lang__lang').forEach(lang => {
		lang.classList.remove('lang__lang_active');
	});
	selected.classList.add('lang__lang_active');
}