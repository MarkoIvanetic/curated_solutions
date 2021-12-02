import fetch from 'node-fetch'

export function fetchPastebinData(url) {
	return fetch(url).then((response) => response.text())
}