const solution = (food_times, k) => {
    let stoppedTime = 0;
    let stoppedFood = 0;
    while (stoppedTime < k) {
        if (food_times.every((val) => val <= 0)) {
            return -1;
        }
        if (food_times[stoppedFood] > 0) {
            food_times[stoppedFood]--;
        } else {
            stoppedFood++;
        }
        stoppedTime++;
        if (stoppedFood === food_times.length - 1) {
            stoppedFood = 0;
        } else {
            stoppedFood++;
        }
    }
    return stoppedFood + 1;
}

console.log(solution([3, 1, 2], 5));