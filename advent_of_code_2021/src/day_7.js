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

    for (var i = 0; i < crabPositions.length / 2; i++) {
        const [left, right] = getOppositeEnds(i, crabPositions.length)

        console.log(`${crabPositions[left]} -> ${crabPositions[left + 1]} : ${crabPositions[right]} -> ${crabPositions[right - 1]}`);

        totalFuelConsumption += getDistance(crabPositions[left], crabPositions[left + 1]) * (i + 1)
        totalFuelConsumption += getDistance(crabPositions[right], crabPositions[right - 1]) * (i + 1)
    }

    return totalFuelConsumption
}

function calculate_b(crabPositionsRaw) {

    let totalFuelConsumption = 0

	const crabPositions = crabPositionsRaw.sort((a, b) => a - b)

    const proposedMiddlePosition = Math.floor(crabPositions.reduce((acc, iter) => acc + iter) / crabPositions.length)

    function getRecursiveDiminishedSum(i) {
        return (i * (i + 1)) / 2
    }

    function getMemoizedFuelConsumption(distance) {
        if (fuelConsumptionMemo[distance] !== undefined) {
            return fuelConsumptionMemo[distance]
        }
        const calculatedFuelConsumption = getRecursiveDiminishedSum(distance)
        fuelConsumptionMemo[distance] = calculatedFuelConsumption
        return calculatedFuelConsumption
    }

    crabPositions.forEach((crab, i) => {
        // calculate distance to proposedMiddlePosition
        // calculate fuel spent to get to that position
        // add it to total fuel

        const distance = getDistance(crab, proposedMiddlePosition)
        const fuelConsumption = getMemoizedFuelConsumption(distance)
        totalFuelConsumption += fuelConsumption
    })

    return totalFuelConsumption
}

// **********************************

const rawData = await fetchPastebinData('https://pastebin.com/raw/qRSQA1fS')
const data = rawData.split(',').map((s) => parseInt(s))

// const a = calculate_a(data)
// const b = calculate_b([16,1,2,0,4,2,7,1,2,14])
const b = calculate_b(data)

console.log('solutions: ', { a: 0, b })
