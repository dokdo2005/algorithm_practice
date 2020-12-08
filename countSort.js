const countSort = (arr) => {
    let count = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        count.push(0);
    }
    for (let j in arr) {
        count[arr[j]]++;
    }
    for (let k in count) {
        for (let p = 0; p < count[k]; p++) {
            result.push(Number(k));
        }
    }
    return result;
}

console.log(countSort([7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]));