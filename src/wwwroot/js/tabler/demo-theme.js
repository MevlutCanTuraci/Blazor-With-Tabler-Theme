/*!
* Tabler v1.0.0-beta20 (https://tabler.io)
* @version 1.0.0-beta20
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/

function changeTheme(type) {

	var themeStorageKey = "tablerTheme";
	const defaultTheme = "light";
	let selectedTheme;
	
	if (!!type){
		localStorage.setItem(themeStorageKey, type);
		selectedTheme = type;
	}
	else {
		var storedTheme = localStorage.getItem(themeStorageKey);
		selectedTheme = storedTheme ? storedTheme : defaultTheme;
	}
	
	window.location.reload();
}


(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
		factory();
})((function () { 'use strict';

	var themeStorageKey = "tablerTheme";
	var defaultTheme = "light";
	var selectedTheme;

	var storedTheme = localStorage.getItem(themeStorageKey);
	selectedTheme = storedTheme ? storedTheme : defaultTheme;
	
	if (selectedTheme === 'dark') {
		document.body.setAttribute("data-bs-theme", selectedTheme);
	} else {
		document.body.removeAttribute("data-bs-theme");
	}

}));