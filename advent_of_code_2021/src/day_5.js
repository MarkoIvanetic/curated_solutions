// https://adventofcode.com/2021/day/1
import { fetchPastebinData } from '../utils/index.js'

const addCoordinateUniversal = (x, y, result) => {
	const key = `${x}:${y}`
	result[key] = result[key] ? result[key] + 1 : 1
}

export function calculate_a(data) {
	const result = {}

	const addCoordinate = (x, y) => addCoordinateUniversal(x, y, result)

	const getNumbersBetween = (_p1, _p2) => {
		const [p1, p2] = [_p1, _p2].sort((a, b) => a - b)

		const numbers = []
		for (let i = p1; i <= p2; i++) {
			numbers.push(i)
		}

		return numbers
	}

	data.forEach((coordinates) => {
		const [x1, y1, x2, y2] = coordinates

		if (x1 === x2) {
			getNumbersBetween(y1, y2).forEach((num) => {
				addCoordinate(x1, num)
			})
		}

		if (y1 === y2) {
			getNumbersBetween(x1, x2).forEach((num) => {
				addCoordinate(num, y1)
			})
		}
	})

	return { result, solution: Object.values(result).filter((n) => n > 1).length }
}

export function calculate_b(data) {
	const { result } = calculate_a(data)

	const addCoordinate = (x, y) => addCoordinateUniversal(x, y, result)

	const registerPointsBetween = (x1, y1, x2, y2) => {
		const numbers = []

		const xMoveIncrement = x1 < x2 ? 1 : -1
		const yMoveIncrement = y1 < y2 ? 1 : -1

		for (let x = x1, y = y2; x !== x2; x += xMoveIncrement, y += yMoveIncrement) {
			addCoordinate(x, y)
		}
	}

	data.forEach((coordinates) => {
		const [x1, y1, x2, y2] = coordinates

		if (x1 !== x2 && y1 !== y2) {
			registerPointsBetween(...coordinates)
		}
	})

	return { solution: Object.values(result).filter((n) => n > 1).length}
}

const rawData = await fetchPastebinData('https://pastebin.com/raw/YQ2XMtB6')

const data = rawData.split(new RegExp('\r\n|\r|\n', 'g')).map((s) => {
	const [l, r] = s.split('->')
	const [x1, y1] = l.split(',')
	const [x2, y2] = r.split(',')

	return [parseInt(x1), parseInt(y1), parseInt(x2), parseInt(y2)]
})

// const { solution: a } = calculate_a(data)
// const { solution: b } = calculate_b(data)

// console.log('solutions: ', { a, b })
