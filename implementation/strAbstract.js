/*
const solution = (s) => {
    let result = [];
    for (let i = 1; i <= s.length; i++) {
        if (i === 1 || i === s.length) {
            result.push(s.length);
        } else {
            let resultStr = '';
            let tmpStr = '';
            let tmpObj = {};
            for (let j = 0; j < s.length; j + i) {
                if (j === 0) {
                    tmpStr = s.substring(0, i + 1);
                    tmpObj[tmpStr] = 1;
                } else {
                    if (tmpStr === s.substring(j, j + i + 1)) {
                        tmpObj[tmpStr]++;
                    } else {
                        tmpStr = s.substring(j, j + i + 1);
                        if (tmpObj.hasOwnProperty(tmpStr)) {
                            tmpObj[tmpStr]++;
                        } else {
                            tmpObj[tmpStr] = 1;
                        }
                    }
                }
            }
            for (let val in tmpObj) {
                if (tmpObj[val] === 1) {
                    resultStr = resultStr + val;
                } else {
                    resultStr = resultStr + tmpObj[val] + val;
                }
            }
            result.push(resultStr.length);
        }
    }
    return Math.min.apply(null, result);
}
*/

const solution = (s) => {
    let answer = s.length;
    for (let i = 1; i < Math.abs(s.length / 2) + 1; i++) {
        let compressed = '';
        let prev = s.substring(0, i);
        let count = 1;
        for (let j = i; j < s.length; j + i) {
            if (prev === s.substring(j, j + i)) {
                count++;
            } else {
                if (count >= 2) {
                    compressed = compressed + String(count) + prev;
                } else {
                    compressed = compressed + prev;
                }
                prev = s.substring(j, j + i);
                count = 1;
            }
        }
        if (count >= 2) {
            compressed = compressed + String(count) + prev;
        } else {
            compressed = compressed + prev;
        }
        answer = Math.min(answer, compressed.length);
    }
    return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));