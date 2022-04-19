const gridContainer = document.querySelector(".grid");
const resetButton = document.querySelector("#reset");
const sizeSlider = document.querySelector("#size-slider");

function getGridDimensions() {
    let dimension = prompt(`What size would you like your grid to be? Write down a single number between 1-100.`)
    createGrid(dimension);
}

function createGrid(squares) {
    for (let i = 0; i < squares * squares; i++) {
        let eachSquare = document.createElement("div");
        eachSquare.style.backgroundColor = "black";
        gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        gridContainer.appendChild(eachSquare);
        eachSquare.addEventListener('mouseover', () => {
            eachSquare.style.backgroundColor = "white";
        })
        function clearGrid() {
            resetButton.addEventListener('click', () => {
                eachSquare.style.backgroundColor = "black";
            })
        }
    clearGrid();
    }
}

function updateGridDimensions(squares) {
    sizeSlider.innerHTML = `${squares} x ${squares}`
    createGrid(squares);
  }

sizeSlider.onmousemove = (e) => updateGridDimensions(e.target.value)