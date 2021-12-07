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

describe('[Day 4 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const { solution } = calculate_a(inputData)
		expect(solution).toBe(5)
	})
})

describe('[Day 4 - task 2] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const { solution } = calculate_b(inputData)
		expect(solution).toBe(12)
	})
})
