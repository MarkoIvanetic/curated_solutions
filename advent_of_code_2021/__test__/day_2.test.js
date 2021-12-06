import { calculate_a, calculate_b } from '../src/day_2'

const inputData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

describe('[Day 2 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const result = calculate_a(inputData)
		expect(result).toBe(150)
	})
})

describe('[Day 2 - task 2] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const result = calculate_b(inputData)
		expect(result).toBe(900)
	})
})
