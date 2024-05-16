const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const changeSize = document.querySelector("#size");

let size = 0;
let gridBoxes;

function checkSize(size) {
  size = prompt("What size would you like the sides of the grid to be?");
  if (size >= 16 && size <= 100) {
    createGrid(size);
  } else if (size > 100) {
    alert("Please select a number between 16 and 100.");
  } else {
    alert("Not a valid number. Please try again");
  }
}

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    grid.appendChild(div);
  }
  gridBoxes = document.querySelectorAll(".gridBox");
  gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", () => {
      let color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
      gridBox.classList.add("active");
      gridBox.style.setProperty("--background-color", color);
    });
  });
}

reset.addEventListener("click", () => {
  gridBoxes.forEach((gridBox) => {
    gridBox.style.setProperty("--background-color", "white");
  });
});

changeSize.addEventListener("click", () => {
  gridBoxes.forEach((gridBox) => {
    gridBox.style.setProperty("--background-color", "white");
  });
  checkSize(size);
});

checkSize(size);
