
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

var playAgain = document.getElementById("playAgain");
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

function checkMove (event){
    alert("You clicked me!");
}