/*
const bigNumber = (n, m, k, nums) => {
    let result = 0;

    nums.sort();
    let firstNum = nums[n - 1];
    let secondNum = nums[n - 2];

    while (true) {
        for (let i = 1; i <= k; i++) {
            if (m === 0) {
                break;
            }
            result += firstNum;
            m--;
        }
        if (m === 0) {
            break;
        }
        result += secondNum;
        m--;
    }

    return result;
}
*/

const bigNumber = (n, m, k, nums) => {
    let result = 0;

    nums.sort();
    let firstNum = nums[n - 1];
    let secondNum = nums[n - 2];
    let count = parseInt(m / (k + 1) * k); // 가장 큰 수가 등장하는 횟수
    count += m % (k + 1); // 가장 큰 수가 더해지는 횟수
    
    result += count * firstNum;
    result += (m - count) * secondNum;

    return result;
}

console.log(bigNumber(5, 8, 3, [2, 4, 5, 4, 6]));