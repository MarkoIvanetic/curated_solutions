// https://adventofcode.com/2021/day/1
import fetch from 'node-fetch'

function transformData(data) {
	return data.split(new RegExp('\r\n|\r|\n', 'g')).map((s) => parseInt(s))
}

async function fetchData() {
	const data = await fetch('https://pastebin.com/raw/SKBN9zMg')
		.then((response) => response.text())
		.then((response) => transformData(response))

	return data
}

export function calculate_a(data) {
	const result = data.reduce((acc, iter, i) => {
		if (i > 0 && iter > data[i - 1]) {
			return acc + 1
		}
		return acc
	}, 0)

	return result
}

export function calculate_b(data) {
	const result = data.reduce((acc, iter, i) => {
		// lets check the limits of array
		if (!(data[i + 1] && data[i + 2] && data[i - 1])) {
			return acc
		}

		const currentMeasurement = iter + data[i + 1] + data[i + 2]
		const previousMeasurement = data[i - 1] + iter + data[i + 1]

		if (previousMeasurement) {
			if (currentMeasurement > previousMeasurement) {
				return acc + 1
			}
		}

		return acc
	}, 0)

	return result
}

const data = await fetchData()
const a = calculate_a(data)
const b = calculate_b(data)

console.log('solutions: ', { a, b })
