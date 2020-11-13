const cardGame = (n, m, cards) => {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        let minVal = 0;
        for (let j = 0; j < m; j++) {
            if (minVal === 0) {
                minVal = cards[i][0];
            } else if (cards[i][j] < minVal) {
                minVal = cards[i][j];
            }
        }
        if (minVal > answer) {
            answer = minVal;
        }
    }
    return answer;
}

console.log(cardGame(3, 3, [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2]
]));

console.log(cardGame(2, 4, [
    [7, 3, 1, 8],
    [3, 3, 3, 4]
]));