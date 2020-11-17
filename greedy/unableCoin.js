const unableCoin = (n, coins) => {
    let target = 1;
    coins.sort();
    for (let i in coins) {
        if (target < coins[i]) {
            break;
        } else {
            target += coins[i];
        }
    }
    return target;
}

console.log(unableCoin(5, [3, 2, 1, 1, 9]));