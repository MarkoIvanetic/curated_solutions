// https://adventofcode.com/2021/day/6
import { fetchPastebinData } from '../utils/index.js'

function getDistance(a, b) {
    return Math.abs(a - b)
}

function getOppositeEnds(i, len) {
    return [i, len - 1 - i]
}

function calculate_a(crabPositionsRaw) {

    let totalFuelConsumption = 0

	const crabPositions = crabPositionsRaw.sort((a, b) => a - b)

    // crabPositions.forEach((crab, i) => {

    //     const [left, right] = getOppositeEnds(i, crabPositions.length)

    //     if (left >= right) {
    //         return
    //     }

    //     console.log(`${crabPositions[left]} -> ${crabPositions[left + 1]} : ${crabPositions[right]} -> ${crabPositions[right - 1]}`);

    //     totalFuelConsumption += getDistance(crabPositions[left], crabPositions[left + 1]) * (i + 1)
    //     totalFuelConsumption += getDistance(crabPositions[right], crabPositions[right - 1]) * (i + 1)
    // })

    crabPositions.forEach((crab, i) => {

        const [left, right] = getOppositeEnds(i, crabPositions.length)

        if (left >= right) {
            return
        }

        console.log(`${crabPositions[left]} -> ${crabPositions[left + 1]} : ${crabPositions[right]} -> ${crabPositions[right - 1]}`);

        totalFuelConsumption += getDistance(crabPositions[left], crabPositions[left + 1]) * (i + 1)
        totalFuelConsumption += getDistance(crabPositions[right], crabPositions[right - 1]) * (i + 1)
    })

    return totalFuelConsumption
}

// **********************************

const rawData = await fetchPastebinData('https://pastebin.com/raw/qRSQA1fS')
const data = rawData.split(',').map((s) => parseInt(s))

const a = calculate_a(data)
// const b = calculateFish(data, 256)

console.log('solutions: ', { a, b:0 })
