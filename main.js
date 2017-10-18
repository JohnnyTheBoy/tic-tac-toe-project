
//#region - selectors
var a1Field = document.getElementById("a1");
var a2Field = document.getElementById("a2");
var a3Field = document.getElementById("a3");
var b1Field = document.getElementById("b1");
var b2Field = document.getElementById("b2");
var b3Field = document.getElementById("b3");
var c1Field = document.getElementById("c1");
var c2Field = document.getElementById("c2");
var c3Field = document.getElementById("c3");

var resultDisplay = document.getElementById("resultDisplay");
var turnDisplay = document.getElementById("turnDisplay");

var button = document.getElementById("playAgain");
//#endregion


//#region - players, game turn, table
var playerX = {
    name: "Player X",
    moves: []
};

var playerO = {
    name: "Player O",
    moves: []
};

var gameTurn = playerX.name;

var table = [a1Field, a2Field, a3Field, b1Field, b2Field, b3Field, c1Field, c2Field, c3Field];
//#endregion

//#region - add listeners
function addListeners(array, event, func) {
    array.forEach(function (element) {
        element.textContent = "";
        element.addEventListener(event, func);
    });
}
//#endregion

addListeners(table, "click", checkMove);
button.addEventListener("click", playAgain);

//#region  - remove listeners
function removeListeners(array, event, func) {
    array.forEach(function (element) {
        element.removeEventListener(event, func)
    });
}
//#endregion


//#region - checking player move and result
function checkMove(event) {

    var result;

    if (gameTurn === playerX.name) {
        playerX.moves.push(event.target.getAttribute("id"));
        event.target.textContent = "X";

        result = checkPattern(playerX);
        if (result) {
            resultDisplay.classList.add("winner");
            resultDisplay.textContent = "WIN X";
        }
        else if (result === false) {
            resultDisplay.classList.add("tie");
            resultDisplay.textContent = "GAME TIE";
        }
        else {
            gameTurn = playerO.name;
            turnDisplay.textContent = "Turn: " + playerO.name;
        }
    }
    else {
        playerO.moves.push(event.target.getAttribute("id"));
        event.target.textContent = "O";

        result = checkPattern(playerO);
        if (result) {
            resultDisplay.classList.add("winner");
            resultDisplay.textContent = "WIN O";
        }
        else if (result === false) {
            resultDisplay.classList.add("tie");
            resultDisplay.textContent = "GAME TIE";
        }
        else {
            gameTurn = playerX.name;
            turnDisplay.textContent = "Turn: " + playerX.name;
        }
    }

    event.target.removeEventListener("click", checkMove);
}
//#endregion

//#region - play game again
function playAgain() {
    removeListeners(table, "click", checkMove);
    addListeners(table, "click", checkMove);
    resultDisplay.textContent = "";
    turnDisplay.textContent = "Turn: " + playerX.name;
    playerX.moves = [];
    playerO.moves = [];
}
//#endregion



//#region - find element in array function
function find(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}
//#endregion


//#region - result pattern, check player moves with winning combinations
function checkPattern(player) {
    var array = player.moves;

    if (array.length >= 3 && array.length !== 5) {
        for (var i = 0; i < array.length; i++) {
            if (find(array, "a1") && find(array, "a2") && find(array, "a3")) { return true }
            else if (find(array, "a1") && find(array, "b1") && find(array, "c1")) { return true }
            else if (find(array, "a1") && find(array, "b2") && find(array, "c3")) { return true }
            else if (find(array, "a2") && find(array, "b2") && find(array, "c2")) { return true }
            else if (find(array, "a3") && find(array, "b2") && find(array, "c1")) { return true }
            else if (find(array, "a3") && find(array, "b3") && find(array, "c3")) { return true }
            else if (find(array, "b1") && find(array, "b2") && find(array, "b3")) { return true }
            else if (find(array, "c1") && find(array, "c2") && find(array, "c3")) { return true }
        }
    }
    else if (array.length === 5) {
        for (var i = 0; i < array.length; i++) {
            if (find(array, "a1") && find(array, "a2") && find(array, "a3")) { return true }
            else if (find(array, "a1") && find(array, "b1") && find(array, "c1")) { return true }
            else if (find(array, "a1") && find(array, "b2") && find(array, "c3")) { return true }
            else if (find(array, "a2") && find(array, "b2") && find(array, "c2")) { return true }
            else if (find(array, "a3") && find(array, "b2") && find(array, "c1")) { return true }
            else if (find(array, "a3") && find(array, "b3") && find(array, "c3")) { return true }
            else if (find(array, "b1") && find(array, "b2") && find(array, "b3")) { return true }
            else if (find(array, "c1") && find(array, "c2") && find(array, "c3")) { return true }
            else { return false };
        }
    }
}

//#endregion