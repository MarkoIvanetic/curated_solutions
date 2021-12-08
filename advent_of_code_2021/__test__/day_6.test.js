import { calculate_a, calculate_b } from '../src/day_6'

const inputData = [3,4,3,1,2]

describe('[Day 6 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const solution = calculate_a(inputData)
		expect(solution).toBe(5934)
	})
})

describe('[Day 6 - task 2] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const solution = calculate_b(inputData)
		expect(solution).toBe(1754597645339)
	})
})
