const antWarrior = (n, houses) => {
    let answer = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 2; j < n; j++) {
            if (houses[i + j] === undefined) {
                break;
            } else {
                let sumOfFoods = houses[i] + houses[i + j];
                if (sumOfFoods > answer) {
                    answer = sumOfFoods;
                }
            }
        }
    }
    return answer;
}

console.log(antWarrior(4, [1, 3, 1, 5]));