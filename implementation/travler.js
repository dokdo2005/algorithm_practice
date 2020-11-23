const travler = (n, plan) => {
    let position = [1, 1];
    for (let i in plan) {
        if (plan[i] === 'L') {
            if (position[1] > 1) {
                position[1]--;
            }
        } else if (plan[i] === 'R') {
            if (position[1] < n) {
                position[1]++;
            }
        } else if (plan[i] === 'U') {
            if (position[0] > 1) {
                position[0]--;
            }
        } else if (plan[i] === 'D') {
            if (position[0] < n) {
                position[0]++;
            }
        }
    }
    return position;
}

console.log(travler(5, ['R', 'R', 'R', 'U', 'D', 'D']));