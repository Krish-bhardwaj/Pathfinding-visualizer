unselected_class = "empty";
selected_class = "wall";
start_class = "start";
end_class = "end";
path_class = "path";
visited_class = "visited";

mouse_down = false;
document.onmousedown = function() { mouse_down = true }
document.onmouseup = function() {
    mouse_down = false;
    start_drag = false;
    end_drag = false
}
start_drag = false;
end_drag = false;

function createFullTable(parent, num_rows, num_cols) {
    table = document.createElement('table');
    parent.appendChild(table);

    for (var i = num_rows; i >= 0; i--) {

        var row = table.insertRow(0);
        row.id = "row " + i;
        for (var j = num_cols; j >= 0; j--) {
            var cell = row.insertCell(0);
            cell.id = i + " " + j;

            cell.classList.add(unselected_class);

            cell.onmousedown = function() {
                if (!this.classList.contains("start") && !this.classList.contains("end")) {
                    swapSelectedNode(this)
                } else if (this.classList.contains("start")) {
                    start_drag = true;
                } else if (this.classList.contains("end")) {
                    end_drag = true;
                }
            }
            cell.onmouseover = function() {
                if (mouse_down == true) {
                    if (start_drag == false && end_drag == false) {
                        if (!this.classList.contains("start") && !this.classList.contains("end")) {
                            swapSelectedNode(this);
                        }
                    } else if (start_drag == true) {
                        this.classList.add("start");
                    } else if (end_drag == true) {
                        this.classList.add("end");
                    }
                }
            }
            cell.onmouseout = function() {
                if (start_drag == true) {
                    this.classList.remove("start");
                } else if (end_drag == true) {
                    this.classList.remove("end");
                }
            }
        }
    }
}

function swapSelectedNode(cell) {
    if (cell.classList.contains(selected_class)) {
        cell.className = unselected_class;
    } else {
        cell.classList.remove(unselected_class)
        cell.className = selected_class;
    }
}