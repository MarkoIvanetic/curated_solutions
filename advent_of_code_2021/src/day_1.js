// https://adventofcode.com/2021/day/1
import {  fetchPastebinData } from "../utils/index.js"

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

const rawData = await fetchPastebinData('https://pastebin.com/raw/SKBN9zMg')
const data = rawData.split(new RegExp('\r\n|\r|\n', 'g')).map((s) => parseInt(s))
const a = calculate_a(data)
const b = calculate_b(data)

console.log('solutions: ', { a, b })
