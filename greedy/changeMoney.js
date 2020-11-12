const changeMoney = (money) => {
    let count = 0;
    let coinTypes = [500, 100, 50, 10];

    for (let i in coinTypes) {
        count += parseInt(money / coinTypes[i]);
        money %= coinTypes[i];
    }

    return count;
}

console.log(changeMoney(1260));