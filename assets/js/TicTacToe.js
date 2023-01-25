// JavaScript code for the game
var cells = document.querySelectorAll(".cell");
var currentPlayer = "x";
var gameOver = false;
var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(e) {
        if (!gameOver && e.target.textContent === "") {
            e.target.textContent = currentPlayer;
            checkWin();
            togglePlayer();
        }
    });
}

function togglePlayer() {
    currentPlayer = currentPlayer === "x" ? "o" : "x";
}

function checkWin() {
    for (var i = 0; i < winCombinations.length; i++) {
        var combination = winCombinations[i];
        var a = combination[0];
        var b = combination[1];
        var c = combination[2];

        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            gameOver = true;
            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");
            alert("Player " + currentPlayer + " wins!");
        }
    }
}

