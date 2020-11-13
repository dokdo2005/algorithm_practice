const toNumberOne = (n, k) => {
    let count = 0;
    let result = n;
    while (result > 1) {
        if (result % k === 0) {
            result = result / k;
        } else {
            result--;
        }
        count++;
    }
    return count;
}

console.log(toNumberOne(25, 5));