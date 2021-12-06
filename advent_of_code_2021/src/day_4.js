// https://adventofcode.com/2021/day/4
import {  fetchPastebinDataJSON } from "../utils/index.js"
import _ from 'lodash'

const BINGO = "XXXXX"

function checkCrossHitsOnLocation(card, i) {
    // checks if there are 5 hits on row or column
    // for array index i
    const firstRowNum = Math.floor(i / 5) * 5
    const firstColNum = i % 5

    const changedRowIndexes = [firstRowNum, firstRowNum + 1, firstRowNum + 2, firstRowNum + 3, firstRowNum + 4]

    const isRowBing = changedRowIndexes.map(i => card[i]).join("") === BINGO

    const changedColIndexes = [firstColNum, firstColNum + 5, firstColNum + 10, firstColNum + 15, firstColNum + 20]
    const isColBing = changedColIndexes.map(i => card[i]).join("") === BINGO

    if (!isRowBing && !isColBing) {
        return false
    }

    // return sum of all remaining numbers
    return card.reduce((acc, iter) => {
        if (iter === "X") {
            return acc
        }
        return acc + iter
    }, 0)
}

export function calculate_a(data) {
    // iterate numbers (N)
    // iterate cards
    // marks hits as X
    // check if card has bingo
    // get 5 numbers that triggered bingo
    // multiply them by number N
    let solution

    data.numbers.every((Ns, i) => {
        // something
        const N = parseInt(Ns)
        let sumOfUnusedCardNumbers

        data.cards.every((C, j) => {
            const matchIndex = C.indexOf(N)
            if (matchIndex > -1) {
                C[matchIndex] = "X"
                const stateAfterUpdate = checkCrossHitsOnLocation(C, matchIndex)
                if (stateAfterUpdate !== false) {
                    sumOfUnusedCardNumbers = stateAfterUpdate
                    return false
                }
                return true
            }
            return true
        })

        if (sumOfUnusedCardNumbers) {
            solution = N * sumOfUnusedCardNumbers
            return false
        }
        return true
    })

    return solution
}

export function calculate_b(data) {
    // iterate numbers (N)
    // iterate cards
    // marks hits as X
    // check if card has bingo
    // get 5 numbers that triggered bingo
    // multiply them by number N
    const cardWon = new Set([])
    const solutionWon = []

    data.numbers.forEach((N, i) => {
        let sumOfUnusedCardNumbers

        data.cards.forEach((C, j) => {
            const matchIndex = C.indexOf(N)
            if (matchIndex > -1) {
                C[matchIndex] = "X"

                if (cardWon.has(j)) {
                    // card already won
                    return
                }

                const stateAfterUpdate = checkCrossHitsOnLocation(C, matchIndex)

                if (stateAfterUpdate !== false) {
                    cardWon.add(j)
                    solutionWon.push(N * stateAfterUpdate)
                }
            }
        })
    })
    console.log(solutionWon);
    return solutionWon.pop()
}

const rawData = await fetchPastebinDataJSON("https://pastebin.com/raw/YHK1vg8P")
const data = {...rawData, numbers: rawData.numbers.map(n => parseInt(n))}

const a = calculate_a(data)
const b = calculate_b(data)

console.log('solutions: ', { a, b })
