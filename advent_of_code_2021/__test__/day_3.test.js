import { calculate_a, calculate_b } from '../src/day_3'

const inputData = [
	'00100',
	'11110',
	'10110',
	'10111',
	'10101',
	'01111',
	'00111',
	'11100',
	'10000',
	'11001',
	'00010',
	'01010',
]

describe('[Day 3 - task 1] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const result = calculate_a(inputData)
		expect(result).toBe(198)
	})
})

describe('[Day 3 - task 2] proposed solution should', () => {
	test('handle simple example of random numbers', () => {
		const result = calculate_b(inputData)
		expect(result).toBe(230)
	})
})
