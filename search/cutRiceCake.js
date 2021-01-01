const cutRiceCake = (n, m, data) => {
    let start = 0;
    let end = data.reduce(function(a, b) {
        return Math.max(a, b);
    });

    let result = 0;
    while (start <= end) {
        let total = 0;
        let mid = Math.round((start + end) / 2);
        for (let i in data) {
            if (data[i] > mid) {
                total += data[i] - mid;
            }
        }
        if (total < m) {
            end = mid - 1;
        } else {
            result = mid;
            start = mid + 1;
        }
    }
    return result;
}

console.log(cutRiceCake(4, 6, [19, 15, 10, 17]));