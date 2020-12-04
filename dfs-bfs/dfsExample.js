const dfs = (graph, v, visited) => {
    visited[v] = true;
    console.log(v);
    for (let i in graph[v]) {
        if (!visited[graph[v][i]]) {
            dfs(graph, graph[v][i], visited);
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

dfs(graph, 1, visited);