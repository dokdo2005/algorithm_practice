const quickSort = (arr) => {
    const getSort = (arr, start, end) => {
        if (start >= end) {
            return;
        }
        let pivot = start;
        let left = start + 1;
        let right = end;
        while (left <= right) {
            while (left <= end && arr[left] <= arr[pivot]) {
                left++;
            }
            while (right > start && arr[right] >= arr[pivot]) {
                right--;
            }
            if (left > right) {
                let tmp = arr[pivot];
                arr[pivot] = arr[right];
                arr[right] = tmp;
            } else {
                let tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
            }
        }
        getSort(arr, start, right - 1);
        getSort(arr, right + 1, end);
    }
    getSort(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]));