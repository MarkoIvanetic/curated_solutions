// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// challenge:
// https://app.codility.com/programmers/challenges/national_coding_week_2021/

function replaceFirstOccurrence (s, f = "abb", r = "baa") {
    // From the given string s, replace f with r of nth occurrence
    return s.replace(f, r);
};

function getBestMutation(str) {
    const mutation = replaceFirstOccurrence(str)
    if (mutation !== str) {
        return getBestMutation(replaceFirstOccurrence(mutation))
    }
    return str
}


function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    return getBestMutation(S)
}
