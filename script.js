const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector("#reset");
const smallGrid = document.querySelector("#small-grid");
const mediumGrid = document.querySelector("#medium-grid");
const largeGrid = document.querySelector("#large-grid");

function createGrid(squares) {
    for (let i = 0; i < squares * squares; i++) {
        const eachSquare = document.createElement("div");
        gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        gridContainer.appendChild(eachSquare);
        eachSquare.addEventListener('mouseover', () => {
            eachSquare.style.backgroundColor = "black";
        })
        resetBtn.addEventListener('click', () => {
            eachSquare.style.backgroundColor = "white";
        })
    }
}

function 


