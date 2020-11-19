const bowlingBall = (n, m, k) => {
    let count = 0;
    let ball1 = [];
    for (let i = 0; i < n; i++) {
        if (k[i] <= m) {
            ball1.push(i);
            for (let j = 0; j < n; j++) {
                if (k[j] <= m && k[i] !== k[j] && !ball1.includes(j)) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(bowlingBall(5, 3, [1, 3, 2, 3, 2]));
console.log(bowlingBall(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]));