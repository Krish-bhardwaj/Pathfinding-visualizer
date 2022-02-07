function getNeighborByIndexJump(row, col, row_jump, col_jump) {
    return document.getElementById((row + row_jump) + " " + (col + col_jump));
}

function getCellVals(cell) {
    var cell_vals = cell.id.split(" ");
    var cell_row = parseInt(cell_vals[0]);
    var cell_col = parseInt(cell_vals[1])
    return [cell_row, cell_col];
}

function getRightCell(cell) {
    var cell_vals = getCellVals(cell);
    return getNeighborByIndexJump(cell_vals[0], cell_vals[1], 0, 1);
}

function getLeftCell(cell) {
    var cell_vals = getCellVals(cell);
    return getNeighborByIndexJump(cell_vals[0], cell_vals[1], 0, -1);
}

function getUpCell(cell) {
    var cell_vals = getCellVals(cell);
    return getNeighborByIndexJump(cell_vals[0], cell_vals[1], -1, 0);
}

function getDownCell(cell) {
    var cell_vals = getCellVals(cell);
    return getNeighborByIndexJump(cell_vals[0], cell_vals[1], 1, 0);
}

function getNeighbors(cell) {
    var up_cell = getUpCell(cell);
    var right_cell = getRightCell(cell);
    var down_cell = getDownCell(cell);
    var left_cell = getLeftCell(cell);
    return [up_cell, right_cell, down_cell, left_cell];
}