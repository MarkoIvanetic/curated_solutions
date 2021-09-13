// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// challenge:
// https://app.codility.com/programmers/challenges/national_coding_week_2021/

// 100% solution:
function matchesPattern(data, i) {
    return data[i] === 'a' && data[i + 1] === 'b' && data[i + 2] === 'b'
}

function transform(data, i) {
    data[i] = 'b'
    data[i + 1] = 'a'
    data[i + 2] = 'a'
}

function hasUnfinishedBuisness(data, i) {
    return data[i - 2] === 'a' && data[i - 1] === 'b'
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const data = S.split('')

    for (let i = 0, matched = false; i < data.length; matched = false) {
        if (matchesPattern(data, i)) {
            transform(data, i)
            matched = true
        }

        if (matched && hasUnfinishedBuisness(data, i)) {
            // go back 2 indexes behind, to solve newly created 'abb' pattern
            i -= 2
        } else {
            i += 1
        }
    }

    return data.join('')
}


// *******************************************************
// first solution (caused timeouts)
function transform(s) {
    return s.replace(/abb/g, 'baa');
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let best = S
    let next = transform(S)

    while (best !== next) {
        best = next
        next = transform(next)
    }
    return best

}

// *******************************************************
// string optimization for long patterns
// solve all /(abb)([b]+) patterns as they are too costy
// caused timeout on big_simple test?
function minifyString(s) {
   return s.replace(/(abb)([b]+)/g, function (t0, t1, t2) {
       // x is the number of 'ba' susbtrings that localized solution will have
        let x = Math.floor((t2.length + 2)  / 2)
        let newSeq = new Array(x).fill("ba").join("")

        if (t2.length % 2 === 0) {
            newSeq += "a"
        } else {
            newSeq += "ab"
        }

        return newSeq
    })
}
