const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector("#rainbow");
const grayscaleBtn = document.querySelector("#grayscale");
const eraseBtn = document.querySelector("#erase");
const slider = document.querySelector("#size-slider");

function createGrid(squares) {
    gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
        resetBtn.addEventListener('click', () => {
            square.style.backgroundColor = "white";
        });
    }
}

function eraseGrid() {
    gridContainer.innerHTML = "";
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`;
}

slider.addEventListener('input', () => {
    let squares = parseInt(document.getElementById('size-slider').value);
    eraseGrid();
    createGrid(squares);
});

rainbowBtn.addEventListener('click', () => {
    let paint = document.querySelectorAll(".square");
    paint.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
});

grayscaleBtn.addEventListener('click', () => {
    let paint = document.querySelectorAll(".square");
    paint.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
            square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.1; 
        });
    });
});

eraseBtn.addEventListener('click', () => {
    let paint = document.querySelectorAll(".square");
    paint.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "white";
        });
    });
});

createGrid(16);