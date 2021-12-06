import fetch from 'node-fetch'

export function fetchPastebinData(url) {
	return fetch(url).then((response) => response.text())
}

export function fetchPastebinDataJSON(url) {
	return fetch(url).then((response) => response.json())
}