const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#size-slider");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
const grayscaleBtn = document.querySelector("#grayscale");
const eraseBtn = document.querySelector("#erase");
const resetBtn = document.querySelector("#reset");
const smallBtn = document.querySelector("#small");
const mediumBtn = document.querySelector("#medium");
const bigBtn = document.querySelector("#big");


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

smallBtn.addEventListener('click', () => {
    eraseGrid();
    createGrid(16);
});

mediumBtn.addEventListener('click', () => {
    eraseGrid();
    createGrid(32);
});

bigBtn.addEventListener('click', () => {
    eraseGrid();
    createGrid(48);
});

blackBtn.addEventListener('click', () => {
    let paint = document.querySelectorAll(".square");
    paint.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
    });
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