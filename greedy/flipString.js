const flipString = (s) => {
    let count0 = 0;
    let count1 = 0;
    if (s[0] === "1") {
        count0++;
    } else {
        count1++;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i+1]) {
            if (s[i+1] === "1") {
                count0++;
            } else {
                count1++;
            }
        }
    }
    return Math.min(count0, count1);
}

console.log(flipString("0001100"));