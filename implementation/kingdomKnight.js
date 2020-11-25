const kingdomKnight = (position) => {
    let row = Number(position[1]);
    let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let column = columns.indexOf(position[0]) + 1;
    let steps = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
    let result = 0;
    for (let i in steps) {
        let nextRow = row + steps[i][0];
        let nextColumn = column + steps[i][1];
        if (nextRow >= 1 && nextRow <= 8 && nextColumn >= 1 && nextColumn <= 8) {
            result++;
        } 
    }
    return result;
}

console.log(kingdomKnight("a1"));