// https://adventofcode.com/2021/day/2
import { fetchPastebinData } from '../utils/index.js'

function transformData(data) {
	return data.split(new RegExp('\r\n|\r|\n', 'g'))
}

function parseStep(step) {
	const stepParsed = step.split(' ')

	const direction = stepParsed[0]
	const change = parseInt(stepParsed[1])

	return [direction, change]
}

export function calculate_a(data) {
	const { depth, horizontal } = data.reduce(
		(acc, iter) => {
			const [direction, change] = parseStep(iter)

			let result

			switch (direction) {
				case 'forward':
					result = { ...acc, horizontal: acc.horizontal + change }
					break
				case 'up':
					result = { ...acc, depth: acc.depth - change }
					break
				case 'down':
					result = { ...acc, depth: acc.depth + change }
					break
				default:
					throw new Error('Something went wrong while parsing step!')
			}
			return result
		},
		{ depth: 0, horizontal: 0 }
	)

	return depth * horizontal
}

export function calculate_b(data) {
	const { depth, horizontal } = data.reduce(
		(acc, iter, i) => {
			const [direction, change] = parseStep(iter)

			let result
			switch (direction) {
				case 'forward':
					const horizontalChange = acc.horizontal + change
					const depthChange = acc.depth + (acc.aim * change)
					result = { ...acc, horizontal: horizontalChange, depth: depthChange }
					break
				case 'up':
					result = { ...acc, aim: acc.aim - change }
					break
				case 'down':
					result = { ...acc, aim: acc.aim + change }
					break
				default:
					throw new Error('Something went wrong while parsing step!')
			}

			return result
		},
		{ aim: 0, depth: 0, horizontal: 0 }
	)

	return depth * horizontal
}

const data = await fetchPastebinData('https://pastebin.com/raw/nPZ3XHnx').then(data => transformData(data))

const a = calculate_a(data)
const b = calculate_b(data)

console.log('solutions: ', { a, b })
