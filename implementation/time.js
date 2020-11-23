const time = (n) => {
    let count = 0;
    for (let i = 0; i < n+1; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                let timeToStr = String(i) + String(j) + String(k);
                if (timeToStr.includes("3")) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(time(5));