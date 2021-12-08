import { calculate_a, calculate_b } from '../src/day_7'

const inputData = [16,1,2,0,4,2,7,1,2,14]

describe('[Day 7 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const solution = calculate_a(inputData)
		expect(solution).toBe(37)
	})
})

describe('[Day 7 - task 2] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const solution = calculate_b(inputData)
		expect(solution).toBe(168)
	})
})
