const multiplyOrPlus = (num) => {
    let nums = [];
    let result = 0;
    for (let i in num) {
        nums.push(Number(num[i]));
    }
    for (let j in nums) {
        if (j === 0 && result === 0) {
            result = nums[0];
        } else {
            if ((result + nums[j]) > (result * nums[j])) {
                result += nums[j];
            } else {
                result *= nums[j];
            }
        }
    }
    return result;
}

console.log(multiplyOrPlus("02984"));
console.log(multiplyOrPlus("567"));