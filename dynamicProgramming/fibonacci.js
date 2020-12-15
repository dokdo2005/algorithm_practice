const fibonacci = (x) => {
    let d = [];
    for (i = 0; i <= x; i++) {
        d.push(0);
    }
    const fibo = (x) => {
        if (x === 1 || x === 2) {
            return 1;
        }
        if (d[x] !== 0) {
            return d[x];
        }
        d[x] = fibo(x - 1) + fibo(x - 2);
        return d[x];
    }
    return fibo(x);
}

console.log(fibonacci(99));