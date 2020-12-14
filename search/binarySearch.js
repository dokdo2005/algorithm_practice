const binarySearch = (array, target, start, end) => {
    if (start > end) {
        return;
    }
    let mid = Math.round((start + end) / 2);
    if (array[mid] === target) {
        return mid + 1;
    } else if (array[mid] > target) {
        return binarySearch(array, target, start, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, end);
    }
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7, 0, 9));
