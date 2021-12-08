import { calculate_a, calculate_b } from '../src/day_5'

const inputData = [
	[0, 9, 5, 9],
	[8, 0, 0, 8],
	[9, 4, 3, 4],
	[2, 2, 2, 1],
	[7, 0, 7, 4],
	[6, 4, 2, 0],
	[0, 9, 2, 9],
	[3, 4, 1, 4],
	[0, 0, 8, 8],
	[5, 5, 8, 2],
]

const inputData2 = [
	[6, 6, 2, 2],
	[1, 4, 5, 0],
	[3, 1, 8, 6],
	[8, 0, 0, 8],
]

describe('[Day 5 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const { solution } = calculate_a(inputData)
		expect(solution).toBe(5)
	})
})

describe('[Day 5 - task 2] proposed solution should', () => {
	test('handle simple example of preconfigured coordinates', () => {
		const { solution } = calculate_b(inputData)
		expect(solution).toBe(12)
	})
	test('handle simple example of multi directional coordinates', () => {
		const { solution } = calculate_b(inputData2)
		expect(solution).toBe(2)
	})
})
