let playerOneSelection = [];
let playerTwoSelection = [];
let playerTurn = 0;

const winCombos = [
  ["11", "12", "13"],
  ["21", "22", "23"],
  ["31", "32", "33"],
  ["11", "21", "31"],
  ["12", "22", "32"],
  ["13", "23", "33"],
  ["11", "22", "33"],
  ["13", "22", "31"],
];
// Býr til 3x3 borð
function createBoard() {
  let board = document.createElement("div");
  board.setAttribute("class", "board");

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + (i + 1));
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("id", i + 1 + "" + (j + 1));
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  document.body.appendChild(board);
}

document.addEventListener("click", function () {
  if (event.target.className == "cell") {
    if (playerTurn % 2 == 0) {
      event.target.classList.add("playerOne");
      playerOneSelection.push(event.target.getAttribute("id"));
      checkWinner(playerOneSelection);
      playerTurn++;
    } else {
      event.target.classList.add("playerTwo");
      playerTwoSelection.push(event.target.getAttribute("id"));
      checkWinner(playerTwoSelection);
      playerTurn++;
    }
  }
});

function initGame() {
  playerOneSelection = [];
  playerTwoSelection = [];
  playerTurn = 0;
}

function checkWinner(playerArray) {
  sortedArray = playerArray.sort();
  for (let i = 0; i < winCombos.length; i++) {
    if (winCombos[i].includes(sortedArray)) {
      console.log("winner");
    } else {
      console.log("winCombos " + winCombos[i]);
      console.log("playerSelection " + sortedArray);
    }
  }
}

// initialize game
createBoard();

initGame();
