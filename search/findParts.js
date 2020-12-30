const findParts = (n, nParts, m, mParts) => {
    let result = [];
    nParts.sort();
    const binarySearch = (array, target, start, end) => {
        if (start > end) {
            return "no";
        }
        let middle = Math.round((start + end) / 2);
        if (array[middle] === target) {
            return "yes";
        } else if (array[middle] > target) {
            return binarySearch(array, target, start, middle - 1);
        } else if (array[middle] < target) {
            return binarySearch(array, target, middle + 1, end);
        } else {
            return "no";
        }
    }
    for (let i = 0; i < m; i++) {
        result.push(binarySearch(nParts, mParts[i], 0, n - 1));
    }
    return result;
}

console.log(findParts(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]));