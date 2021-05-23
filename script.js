"use strict";
const box = document.querySelectorAll;
const winningText = document.querySelector(".winning-text");
const winning = document.querySelector(".winning");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector(".restart");
const indicator = document.querySelector(".player-indicator");

const cells = document.querySelectorAll(".cell");

let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let activePlayer = 0;
const players = ["X", "O"];
let counter = 0;

const winCondition = () => {
  return (
    (board[0] === board[1] && board[1] === board[2]) ||
    (board[3] === board[4] && board[4] === board[5]) ||
    (board[6] === board[7] && board[7] === board[8]) ||
    (board[0] === board[3] && board[3] === board[6]) ||
    (board[1] === board[4] && board[4] === board[7]) ||
    (board[2] === board[5] && board[5] === board[8]) ||
    (board[0] === board[4] && board[4] === board[8]) ||
    (board[2] === board[4] && board[4] === board[6])
  );
};

const changeTurn = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const updateBoard = function (index) {
  board[index] = cells[index].textContent;
  return true;
};
const checkWinner = function () {
  console.log(winCondition());
  if (winCondition() && counter <= 9) {
    console.log("checking winner");
    winning.classList.remove("hidden");
    winningText.innerHTML = `${players[activePlayer]} Wins!`;
    overlay.classList.remove("hidden");
  } else if (counter >= 9) {
    console.log("didnt win");
    winning.classList.remove("hidden");
    winningText.innerHTML = `Game Tied!`;
    overlay.classList.remove("hidden");
  }
};

const startgame = function () {
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (board[index] != "X" && board[index] != "O") {
        counter++;
        cell.innerHTML = players[activePlayer];
        if (players[activePlayer] == "X") {
          cell.style.backgroundColor = "#F59B51";

          indicator.innerHTML = "O";
          indicator.style.backgroundColor = "#E2F551";
        } else {
          cell.style.backgroundColor = "#E2F551";
          indicator.innerHTML = "X";
          indicator.style.backgroundColor = "#F59B51";
        }
        console.log(players[activePlayer]);
        updateBoard(index);
        console.log(board);
        checkWinner();
        changeTurn();
        console.log(counter);
      } else {
        cell.style.pointerEvents = "none";
      }
    });
  });
};

startgame();

restart.addEventListener("click", function () {
  location.reload();
});
