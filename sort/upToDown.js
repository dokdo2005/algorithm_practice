const upToDown = (n, nums) => {
    let result = nums.sort((a, b) => { return b - a });
    return result;
}

console.log(upToDown(3, [15, 27, 12]))