// https://adventofcode.com/2021/day/2
import { fetchPastebinData } from '../utils/index.js'
import _ from 'lodash'

function transformData(data) {
	return data.split(new RegExp('\r\n|\r|\n', 'g'))
}

function parseItem(item) {
	return item.split('').map((s) => parseInt(s))
}

function mergeIntArrays(acc, item) {
	return item.map((x, i) => {
		return (acc[i] || 0) + x
	})
}

export function calculate_a(data) {
	const { length: dataSize } = data

	const dataSum = data.reduce((acc, iter) => {
		const binArray = parseItem(iter)
		return mergeIntArrays(acc, binArray)
	}, [])

	const { gammaRate, epsilonRate } = dataSum.reduce(
		(acc, iter) => {
			const arrayIncrement = iter > dataSize / 2 ? ['1', '0'] : ['0', '1']

			return {
				gammaRate: acc.gammaRate + arrayIncrement[0],
				epsilonRate: acc.epsilonRate + arrayIncrement[1],
			}
		},
		{
			gammaRate: '',
			epsilonRate: '',
		}
	)

	return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

export function calculate_b(data) {
	const { length: dataSize } = data

	// ["0", "1", "1", "0", "1"]
	// for iteration purposes
	const digitList = data[0].split('')

	const getDigitSumOnPosition = (list, i) => {
		const [freq0, freq1] = _.partition(list, (item) => {
			return item[i] === '0'
		})

		return [freq0.length, freq1.length]
	}

	const filterDigitIndexValue = (data, index, digit) => {
		if (data.length === 1) {
			// skip if there is only one item
			return data
		}
		return data.filter((item) => {
			return item[index] === digit
		})
	}

	const [ogr, c02] = digitList.reduce(
		(acc, positionSum, i) => {
			const [ogrFreq0, ogrFreq1] = getDigitSumOnPosition(acc[0], i)

			const dominantDigit = (() => {
				if (ogrFreq0 > ogrFreq1) return '0'
				if (ogrFreq0 < ogrFreq1) return '1'
				if (ogrFreq0 === ogrFreq1) return '1'
			})()

			const ogrFit = filterDigitIndexValue(acc[0], i, dominantDigit)

			const [c02Freq0, c02Freq1] = getDigitSumOnPosition(acc[1], i)

			const nonDominantDigit = (() => {
				if (c02Freq0 > c02Freq1) return '1'
				if (c02Freq0 < c02Freq1) return '0'
				if (c02Freq0 === c02Freq1) return '0'
			})()

			const c02Fit = filterDigitIndexValue(acc[1], i, nonDominantDigit)

			return [ogrFit, c02Fit]
		},
		[data, data]
	)

	return parseInt(ogr[0], 2) * parseInt(c02[0], 2)
}

const data = await fetchPastebinData('https://pastebin.com/raw/hRrSN90X').then((data) => transformData(data))

const a = calculate_a(data)
const b = calculate_b(data)

console.log('solutions: ', { a, b })
