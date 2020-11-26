const strSort = (str) => {
    let result = '';
    let sumOfNums = 0;
    let strToArr = str.split('').sort();
    for (let i in strToArr) {
        if (isNaN(Number(strToArr[i]))) {
            result = result + strToArr[i];
        } else {
            sumOfNums += Number(strToArr[i]);
        }
    }
    result = result + String(sumOfNums);
    return result;
}

console.log(strSort("K1KA5CB7"));
console.log(strSort("AJKDLSI412K4JSJ9D"));