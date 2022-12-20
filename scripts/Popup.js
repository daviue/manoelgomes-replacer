"use strict";

function save() {
	chrome.storage.sync.set({
		enabled: document.getElementById("enabled").checked,
	}, function() {
		document.getElementById("submit").value = "Saved";
	});
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
		chrome.tabs.reload(arrayOfTabs[0].id);
	});
}

function restore() {
	chrome.storage.sync.get({
		enabled: false,
	}, function(items) {
		document.getElementById("enabled").checked = items.enabled;
	});
}

function changed() {
	document.getElementById("submit").value = "Save";
}

function enter(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		save();
	}
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("submit").addEventListener("click", save);
document.getElementById("enabled").addEventListener("click", changed);
