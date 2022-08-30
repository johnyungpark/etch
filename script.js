const container = document.querySelector('div.container');
const clear = document.querySelector('button.clear');
const black = document.querySelector('button.black');
const blue = document.querySelector('button.blue');
const rainbow = document.querySelector('button.rainbow');
const erase = document.querySelector('button.erase');
const oor = document.querySelector('div.oor');
const boxes = document.querySelector('button.boxes');
let color = 'black';

function populateGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let area = size * size;
    for (let i = 0; i < area; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorBox);
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement("beforeend", square);
    }
}

populateGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
    oor.style.display = 'none';
    populateGrid(input);
    } else {
    oor.style.display = "initial";
    oor.textContent = "Number must be in the range of 2-100.";
    }
}

function colorBox() {
    blue.addEventListener('click', () => {color = 'blue'});
    black.addEventListener('click', () => {color = 'black'});
    erase.addEventListener('click', () => {color = 'white'});
    rainbow.addEventListener('click', () => {color = 'rainbow'});
    if (color == 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

clear.addEventListener('click', clearAll);

function clearAll() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}