const gridContainer = document.querySelector(".grid");
const resetBtn = document.querySelector("#reset");
const smallGrid = document.querySelector("#small-grid");
const mediumGrid = document.querySelector("#medium-grid");
const largeGrid = document.querySelector("#large-grid");

function getGridDimensions() {
    let dimension = prompt(`What size would you like your grid to be? Write down a single number between 1-100.`)
    createGrid(dimension);
}

function createGrid(squares) {
    for (let i = 0; i < squares * squares; i++) {
        let eachSquare = document.createElement("div");
        eachSquare.style.backgroundColor = "white";
        eachSquare.style.border = "thin solid grey";
        gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        gridContainer.appendChild(eachSquare);
        eachSquare.addEventListener('mouseover', () => {
            eachSquare.style.backgroundColor = "black";
        })
        function clearGrid() {
            resetBtn.addEventListener('click', () => {
                eachSquare.style.backgroundColor = "white";
            })
        }
    clearGrid();
    }
}
