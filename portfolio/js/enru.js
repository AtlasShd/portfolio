'use strict'

import i18Obj from './translate.js';

window.addEventListener('DOMContentLoaded', function () {

	document.querySelectorAll('.lang__lang').forEach(lang => {
		lang.addEventListener('click', function (e) {
			changeLanguage(e.target.innerText);
			changeColorLang(e.target)
		});
	});

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
});