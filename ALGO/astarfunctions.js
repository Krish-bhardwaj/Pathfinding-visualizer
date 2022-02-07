function aStar(start_node, end_node) {
    var history = [];
    var visited = [start_node];
    start_node.local = 0;
    start_node.heuristic = distance(start_node, end_node);

    while (visited.length != 0) {
        visited.sort((a, b) => a.heuristic - b.heuristic);
        var curr_node = visited[0];
        if (curr_node === end_node) {
            history.push(curr_node);
            return history;
        }

        var curr_node_neighbors = curr_node.getNeighborNodes();
        for (var i = 0; i < curr_node_neighbors.length; i++) {
            curr_node_neighbor = curr_node_neighbors[i];

            if (curr_node_neighbor.cell.className != selected_class) {
                if (curr_node.local + 1 < curr_node_neighbor.local) {
                    curr_node_neighbor.local = curr_node.local + 1;
                    curr_node_neighbor.heuristic = curr_node_neighbor.local + distance(curr_node_neighbor, end_node);
                    curr_node_neighbor.parent = curr_node;

                    if (!visited.includes(curr_node_neighbor)) {
                        visited.push(curr_node_neighbor);
                    }
                }

            }
        }
        history.push(curr_node);
        visited.splice(0, 1);
    }
    return history;
}

function distance(from_node, to_node) {
    return Math.abs(from_node.row - to_node.row) + Math.abs(from_node.column - to_node.column);
}