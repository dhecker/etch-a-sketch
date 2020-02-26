let gridSize = 16;
const grid = document.getElementById("grid");
drawGrid(gridSize);

function drawGrid(gridSize)  {

    for (row=0; row<gridSize ; row++) { 

        for (column=0; column<gridSize ; column++) { 

            let newdiv = document.createElement("div");   //create the individual div
            newdiv.id  = "row_" + row + "column+" + column;
            newdiv.style.backgroundColor = "red";
            newdiv.style.border = "1px solid #999999";
            newdiv.addEventListener("mouseover", hoverEffect);
            grid.appendChild(newdiv);
                            }
    }
            // now set the grid dimensions in the wrapper
            boxSize = (600 / gridSize);
            grid.style.gridTemplateColumns = ( "repeat(" + gridSize + "," + boxSize +"px)");
            grid.style.gridTemplateRows = ( "repeat(" + gridSize + "," + boxSize +"px)");

}

function resizeGrid() {
    let gridSize = prompt ("How large should the grid be?");
    drawGrid(gridSize);
}

function resetGrid() {
    
    grid.querySelectorAll("*").forEach(n => n.remove());
    drawGrid(gridSize);
    
}

function  hoverEffect (e){   

    let hovered = document.getElementById(this.id);
    hovered.style.backgroundColor= "#000000";
}



