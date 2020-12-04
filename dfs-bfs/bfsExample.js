const bfs = (graph, start, visited) => {
    let queue = [];
    visited[start] = true;
    while (queue.length > 0) {
        let v = queue.shift();
        console.log(v);
        for (let i in graph[v]) {
            if (!visited[graph[v][i]]) {
                queue.push(graph[v][i]);
                vistied[graph[v][i]] = true;
            }
        }
    }
}

const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

let visited = [false, false, false, false, false, false, false, false, false];

bfs(graph, 1, visited);