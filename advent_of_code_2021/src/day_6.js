// https://adventofcode.com/2021/day/6
import { fetchPastebinData } from '../utils/index.js'


function calculateFish(state, days) {
    // setup
	const fishRegistry = {}

	for (let i = 0; i <= 8; i++) {
		fishRegistry[i] = 0
	}

	state.forEach((i) => {
		fishRegistry[i]++
	})

    // lets count fish
    function updateRegistry() {
        const zeroFish = fishRegistry[0]
        for (let i = 0; i < 8; i++) {
            fishRegistry[i] = fishRegistry[i + 1]
        }
        fishRegistry[8] = zeroFish
        fishRegistry[6] += zeroFish
    }

	for (let i = 0; i < days; i++) {
		updateRegistry()
	}

	return Object.values(fishRegistry).reduce((accu, iter) => accu + iter)
}

// **********************************

const rawData = await fetchPastebinData('https://pastebin.com/raw/zfN2zSmd')
const data = rawData.split(',').map((s) => parseInt(s))

const a = calculateFish(data, 80)
const b = calculateFish(data, 256)

console.log('solutions: ', { a, b })
