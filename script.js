const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector("#rainbow");
const slider = document.querySelector("#size-slider");

function createGrid(squares) {
    gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
        const eachSquare = document.createElement("div");
        eachSquare.classList.add("eachSquare");
        gridContainer.appendChild(eachSquare);
        eachSquare.addEventListener('mouseover', () => {
            eachSquare.style.backgroundColor = "black";
        })
        resetBtn.addEventListener('click', () => {
            eachSquare.style.backgroundColor = "white";
        })
        rainbowBtn.addEventListener('click', () => {
            eachSquare.style.backgroundColor = randomColor();
        })
    }
}

function eraseGrid() {
    gridContainer.innerHTML = "";
}

slider.addEventListener('input', () => {
    let squares = parseInt(document.getElementById('size-slider').value);
    eraseGrid();
    createGrid(squares);
  });

createGrid(16)

function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    let rbg = `(${r}, ${b}, ${g})`;
    console.log(rbg)
}

