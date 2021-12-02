import { calculate_a, calculate_b } from '../src/day_1'

describe('[Day 1 - task 1] proposed solution should', () => {
	//   beforeEach(() => {
	//   });

	test('handle simple example of random numbers', () => {
		const result = calculate_a([5, 8, 6, 5, 9, 10])
		expect(result).toBe(3)
	})

	test('handle example with descending numbers', () => {
		const result = calculate_a([8, 7, 6, 5, 4, 3])
		expect(result).toBe(0)
	})

	test('handle example with increasing numbers', () => {
		const result = calculate_a([3, 4, 5, 6, 7, 8])
		expect(result).toBe(5)
	})
})

describe('[Day 1 - task 2] proposed solution should', () => {
	//   beforeEach(() => {
	//   });

	test('handle simple example of random numbers', () => {
		const result = calculate_b([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
		expect(result).toBe(5)
	})

	test('handle example with decreasing numbers', () => {
		const result = calculate_b([199, 200, 200, 207, 208, 210, 240, 260, 263, 269])
		expect(result).toBe(7)
	})

	test('handle example with increasing numbers', () => {
		const result = calculate_a([269, 263, 260, 240, 210, 208, 207, 200, 200, 199])
		expect(result).toBe(0)
	})
})