let size = getSize();
let click = false;
let color = "black";

createBoard(16);

function createBoard(size) {
  resetBoard();

  const board = document.querySelector(".board");

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

function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 85%, 48%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelector(".board");
    let square = divs.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector(".board").addEventListener("click", (e) => {
  click = !click;
});
