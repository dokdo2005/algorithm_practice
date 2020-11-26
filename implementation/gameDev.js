const gameDev = (size, position, status) => {
    let d = [];
    for (let i = 1; i <= size[0]; i++) {
        let tmpArr = [];
        for (let j = 1; j <= size[1]; j++) {
            tmpArr.push(0);
        }
        d.push(tmpArr);
    }
    let x = position[0];
    let y = position[1];
    let direction = position[2];
    d[x][y] = 1;

    let array = [];
    for (let a in status) {
        let tmpArr = [];
        for (let b in status[a]) {
            tmpArr.push(status[a][b]);
        }
        array.push(tmpArr);
    }

    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    const turnLeft = () => {
        direction -= 1;
        if (direction === -1) {
            direction = 3;
        }
    }

    let count = 1;
    let turnTime = 0;
    while (true) {
        turnLeft();
        let nx = x + dx[direction];
        let ny = y + dy[direction];
        if (d[nx][ny] === 0 && array[nx][ny] === 0) {
            d[nx][ny] = 1;
            x = nx;
            y = ny;
            count += 1;
            turnTime = 0;
            continue;
        } else {
            turnTime += 1;
        }
        if (turnTime === 4) {
            nx = x - dx[direction];
            ny = y - dy[direction];
            if (array[nx][ny] === 0) {
                x = nx;
                y = ny;
            } else {
                break;
            }
            turnTime = 0;
        }
    }
    return count;
}

console.log(gameDev([4, 4], [1, 1, 0], [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]));