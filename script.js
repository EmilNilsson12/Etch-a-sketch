
const body = document.querySelector('body');
body.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const h1 = document.createElement('h1');
h1.textContent = 'Etch-a-sketch'
const h2 = document.createElement('h2');
h2.textContent = 'Press F5 to shake the Etch-a-sketch canvas!'

body.appendChild(h1);
body.appendChild(h2);



const etchCanvas = document.createElement('div');

let gridWidth = 200;
let gridHeight = 300;
let pixelSize = 5;
let numOfPixels = gridWidth*gridHeight/pixelSize;

etchCanvas.style.border = '10px solid black';
etchCanvas.style.backgroundColor = 'white';
etchCanvas.style.height = `${gridHeight}px`;
etchCanvas.style.width = `${gridWidth}px`;
etchCanvas.style.display = 'grid';
etchCanvas.style.gridTemplateColumns = `repeat(${gridWidth/pixelSize}, ${pixelSize}px)`;
etchCanvas.style.gridTemplateRows = `repeat(${gridHeight/pixelSize}, ${pixelSize}px)`;



for (let i = 0; i < numOfPixels; i++) {
    const etchPixel = document.createElement('div');

    etchPixel.addEventListener('mouseover', colorRed) 
    etchCanvas.appendChild(etchPixel);
}

body.appendChild(etchCanvas);



function colorRed(e) {
    e.target.style.backgroundColor = 'red';
};