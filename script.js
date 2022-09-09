const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const changeSize = document.querySelector("#size");
let size = prompt("What size would you like the sides of the grid to be?");
let gridBoxes;

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("gridBox");
        grid.appendChild(div);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox. addEventListener("mouseover", (e) => {
            gridBox.classList.add("active");
        });
    });
}

reset.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
});

changeSize.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
    size = prompt("What size would you like the sides of the grid to be?");
});

createGrid(size);