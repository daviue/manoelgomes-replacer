"use strict";

/* const manoelGomesPaths = [
	'https://i.imgur.com/ESr9JHY.jpg',
	'https://i.imgur.com/B0Mu17X.jpg',
	'https://i.imgur.com/y4Oscnt.jpg',
	'https://i.imgur.com/mg3dPk2.jpg',
	'https://i.imgur.com/6xjiRQo.jpg',
	'https://i.imgur.com/C0tyoOO.jpg',
]; */

const randomImage = async () => {
	return manoelGomesPaths[Math.floor(Math.random()*manoelGomesPaths.length)];
};

var url = 'https://i.imgur.com/ESr9JHY.jpg';

const replace = async () => {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		const imageSrc = await randomImage();
		images[i].src = await randomImage();
	}
}

chrome.storage.sync.get({
	enabled: false,
	url: ""
}, function(items) {
	if (items.enabled) {
		url = items.url;
		var css = document.createElement("style");
		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
		document.body.appendChild(css);
		window.setInterval(replace, 3000);
		replace();
	}
});