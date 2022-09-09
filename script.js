const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const changeSize = document.querySelector("#size");

let size = 0;
let gridBoxes;
let color;

function checkSize(size) {
    size = prompt("What size would you like the sides of the grid to be?");
    if(size >= 16 && size <= 100) {
        createGrid(size);
    } else if(size > 100) {
        alert("Please select a number between 16 and 100.");
    } else {
        alert("Not a valid number. Please try again");
    }
}

function createGrid(size, color) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("gridBox");
        grid.appendChild(div);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", function (e) {
            let color =`hsl(${Math.floor(Math.random() * 360)}, 100% 50%)`;
            e.target.style.backgroundColor = color;
            console.log(`${color}`);
            console.log(e.target);
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
    checkSize(size);
});

checkSize(size);