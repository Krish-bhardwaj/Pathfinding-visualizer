function breadthFirst(start_node, end_node) {
    var history = [start_node];
    var visited = [start_node];

    while (visited.length != 0 && !history.includes(end_node)) {
        var curr_node = visited.shift();

        var curr_node_neighbors = curr_node.getNeighborNodes();
        for (var i = 0; i < curr_node_neighbors.length; i++) {
            var curr_node_neighbor = curr_node_neighbors[i];
            if (curr_node_neighbor.cell.className != selected_class && !history.includes(curr_node_neighbor)) {
                curr_node_neighbor.parent = curr_node;
                history.push(curr_node_neighbor);
                visited.push(curr_node_neighbor);
            }
        }
    }
    return history;
}