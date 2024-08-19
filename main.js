let size = getSize();
let click = false;
let color = "black";
const board = document.querySelector(".board");

createBoard(16);

function createBoard(size) {
  resetBoard();

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let newSize = document.getElementById("size");
  newSize.onclick = (e) => createBoard(e.target.value);
}

const active = document.querySelector(".active");

function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    } else if (color == "gray") {
      if (this.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
          this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        }
      } else {
        this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      }
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}

board.addEventListener("click", () => {
  click = !click;
  if (click) {
    active.style.backgroundColor = "#86d00e";
  } else {
    active.style.backgroundColor = "#d0420e";
  }
});

const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});
