// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// challenge:
// https://app.codility.com/programmers/challenges/national_coding_week_2021/

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
