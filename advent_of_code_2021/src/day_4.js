// https://adventofcode.com/2021/day/4
import {  fetchPastebinDataJSON } from "../utils/index.js"

const BINGO = "XXXXX"

function checkCrossHitsOnLocation(card, i) {
    // checks if there are 5 hits on row or column
    // for array index i
    const firstRowNum = Math.floor(i / 5) * 5
    const firstColNum = i % 5

    const changedRowIndexes = [firstRowNum, firstRowNum + 1, firstRowNum + 2, firstRowNum + 3, firstRowNum + 4]

    if (changedRowIndexes.map(i => card[i]).join("") === BINGO) {
        return changedRowIndexes
    }

    const changedColIndexes = [firstRowNum, firstRowNum + 5, firstRowNum + 10, firstRowNum + 15, firstRowNum + 20]

    if (changedColIndexes.map(i => card[i]).join("") === BINGO) {
        return changedColIndexes
    }

    return false
}

export function calculate_a(data) {
    // iterate numbers (N)
    // iterate cards
    // marks hits as X
    // check if card has bingo
    // get 5 numbers that triggered bingo
    // multiply them by number N
    let solution

    data.numbers.every((N, i) => {
        // something
        let bingoPentaSum

        data.cards.every((C, j) => {
            const matchIndex = C.indexOf(N)
            if (matchIndex > -1) {
                C[matchIndex] = "X"
                const stateAfterUpdate = checkCrossHitsOnLocation(C, matchIndex)
                if (Array.isArray(stateAfterUpdate)) {
                    console.log("BINGO!");
                    bingoPentaSum = stateAfterUpdate.reduce((acc, iter) => acc + iter, 0)
                    return false
                }
                return true
            }
        })

        if (bingoPentaSum) {
            solution = N * bingoPentaSum
            return false
        }

        return true
    })
}

export function calculate_b(data) {
	const result = data.reduce((acc, iter, i) => {
		// lets check the limits of array
		if (!(data[i + 1] && data[i + 2] && data[i - 1])) {
			return acc
		}

		const currentMeasurement = iter + data[i + 1] + data[i + 2]
		const previousMeasurement = data[i - 1] + iter + data[i + 1]

		if (previousMeasurement) {
			if (currentMeasurement > previousMeasurement) {
				return acc + 1
			}
		}

		return acc
	}, 0)

	return result
}

const data = await fetchPastebinDataJSON("https://pastebin.com/raw/YHK1vg8P")
const a = calculate_a(data)
// const b = calculate_b(data)

console.log('solutions: ', { a, b:0 })
