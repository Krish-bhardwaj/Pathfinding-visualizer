node_list = [];

function createNodeFromElement(cell_element) {
    var [row_num, col_num] = cell_element.id.split(" ").map(x => +x);

    var node_search_index = node_list.findIndex((node) => (node.row == row_num && node.column == col_num));
    if (node_search_index != -1) {
        return node_list[node_search_index];
    } else {
        var node = {
            row: row_num,
            column: col_num,
            cell: cell_element,
            parent: null,
            local: Infinity,
            heuristic: Infinity,
            getNeighborNodeByIndexJump: function(row_jump, col_jump) {
                return createNodeFromPosition(this.row + row_jump, this.column + col_jump);
            },
            getRightNode: function() {
                return this.getNeighborNodeByIndexJump(0, 1);
            },
            getLeftNode: function() {
                return this.getNeighborNodeByIndexJump(0, -1);
            },
            getUpNode: function() {
                return this.getNeighborNodeByIndexJump(-1, 0);
            },
            getDownNode: function() {
                return this.getNeighborNodeByIndexJump(1, 0);
            },
            getNeighborNodes: function() {
                var up_node = this.getUpNode();
                var right_node = this.getRightNode();
                var down_node = this.getDownNode();
                var left_node = this.getLeftNode();
                return [up_node, right_node, down_node, left_node].filter(Boolean);
            }
        };
        node_list.push(node);
        return node;
    }
}


function createNodeFromPosition(row_num, col_num) {
    var cell_element = document.getElementById(row_num + " " + col_num);

    if (cell_element) {
        return createNodeFromElement(cell_element);
    } else {
        return null;
    }
}