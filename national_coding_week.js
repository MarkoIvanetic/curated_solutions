// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// challenge:
// https://app.codility.com/programmers/challenges/national_coding_week_2021/

function replaceOccurrence (s, n, f = "abb", r = "baa") {
    // From the given string s, replace f with r of nth occurrence
    return s.replace(RegExp("^(?:.*?" + f + "){" + n + "}"), x => x.replace(RegExp(f + "$"), r));
};

function getNoOccurrences(s, frag = "abb") {
    return s.split(frag).length - 1
}

function hasOccurrence(s, frag = "abb") {
    return s.includes(frag)
}

function getBestMutation(str) {
    if (hasOccurrence(str)) {
        return getBestMutation(replaceOccurrence(str, 1))
    }
    return str
}

// function getPossibleStringMutations(str) {
//     const mutations = []

//     for (let i = 1; i <= getNoOccurrences(str); i++) {
//         const mutation = replaceOccurrence(str, i)
//         mutations.push(mutation)

//         if (hasOccurrence(mutation)) {
//             const childMutations = getPossibleStringMutations(mutation)
//             mutations.push(...childMutations)
//         }
//     }

//     return mutations
// }

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!hasOccurrence(S)) {
        return S
    }

    // const mutationArray = getPossibleStringMutations(S)
    // return mutationArray.sort().pop()

    return getBestMutation(S)
}
