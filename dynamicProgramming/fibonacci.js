const fibonacci = (x) => {
    let d = [];
    for (i = 1; i <= x; i++) {
        d.push(0);
    }
    const fibo = (x) => {
        if (x === 1 || x === 2) {
            return 1;
        }
        if (d[x - 1] !== 0) {
            return d[x - 1];
        }
        d[x - 1] = fibo(x - 1) + fibo(x - 2);
        return d[x - 1];
    }
    return fibo(x);
}

console.log(fibonacci(99));