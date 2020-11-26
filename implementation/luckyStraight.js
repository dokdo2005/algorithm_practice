const luckyStraight = (number) => {
    let numToStr = String(number);
    let splitPoint = numToStr.length / 2;
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < splitPoint; i++) {
        leftSum += Number(numToStr[i]);
    }
    for (let j = splitPoint; j < numToStr.length; j++) {
        rightSum += Number(numToStr[j]);
    }
    if (leftSum === rightSum) {
        return 'LUCKY';
    } else {
        return 'READY';
    }
}

console.log(luckyStraight(123402));
console.log(luckyStraight(7755));