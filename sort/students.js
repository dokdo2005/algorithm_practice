const students = (n, data) => {
    let result = [];
    for (let i = 1; i < n; i++) {
        if (data[i-1][1] > data[i][1]) {
            let tmp = data[i];
            data[i] = data[i-1];
            data[i-1] = tmp;
        }
    }
    for (let j in data) {
        result.push(data[j][0]);
    }
    return result;
}

console.log(students(2, [['홍길동', 95], ['이순신', 77]]));