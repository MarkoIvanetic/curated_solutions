// https://adventofcode.com/2021/day/1
import fetch from 'node-fetch'

function transformData(data) {
	return data.split(new RegExp('\r\n|\r|\n', 'g')).map((s) => parseInt(s))
}

async function calculate() {
	const data = await fetch('https://pastebin.com/raw/8LCAyphW')
		.then((response) => response.text())
		.then((response) => transformData(response))
    console.log(data)
	const result = data.reduce((acc, iter, i) => {
		if (i > 0 && iter > (data[i - 1])) {
			return acc + 1
		}
		return acc
	}, 0)

	return result
}

const solution = await calculate()
console.log('solution: ', solution)
