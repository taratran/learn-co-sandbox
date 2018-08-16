let winArr = [
  ["#0-0", "#1-0", "#2-0"], // top row
  ["#0-1", "#1-1", "#2-1"], // middle row
  ["#0-2", "#1-2", "#2-2"], // bottom row
  ["#0-0", "#0-1", "#0-2"], // left column
  ["#1-0", "#1-1", "#1-2"], // middle column
  ["#2-0", "#2-1", "#2-2"], // right column
  ["#0-0", "#1-1", "#2-2"], // back slash
  ["#0-2", "#1-1", "#2-0"] // forward slash
]

let mark = 'X'

function listenForClicksOnCells() {
  $('.cell').click(markCell) 
}

listenForClicksOnCells()

function markCell() {
  if (!this.innerText) {
    this.innerText = mark
    if (playerWon(mark)) {
      alert("won the game!")
    }
    mark = (mark === 'X') ? 'O' : 'X'
  }
}

function elementContains(id, mark) {
  return $(id).text() === mark
}

// this function runs after each turn
// it checks whether a given (either 'x' or 'o') populates all
// three spots in any given win combination
function playerWon (mark) {
  for (let i = 0; i < winArr.length; i++) {
    let winCombo = winArr[i]
    let won = winCombo.every(id => elementContains(id, mark))
    // checks if elementContains returns true for every id
    if (won) return true
  }
  return false
}

function resetGame() {
  
}

function displayMsg(msg) {
  
}

function listenForClickOnMessage() {
  
}
