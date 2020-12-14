const sequentialSearch = (n, target, array) => {
    for (let i = 0; i < n; i++) {
        if (array[i] === target) {
            return i + 1;
        }
    }
}

console.log(sequentialSearch(5, "Dongbin", ["haneul", "Jonggu", "Dongbin", "Taeil", "Sangwook"]));