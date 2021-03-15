const container = document.getElementById('canvas-container');
const etchCanvas = document.getElementById('etchCanvas');


const clearCanvas = document.getElementById('clearCanvas');
clearCanvas.addEventListener('click', function(){
    document.querySelectorAll('.pixels').forEach(pixel => pixel.style.backgroundColor = 'white')
});




let defaultResolution = 50;

defineGrid(defaultResolution);
container.appendChild(etchCanvas);

function defineGrid(resolution) {
    let pixelSize = 700 / resolution;
    let numOfSquares = resolution*resolution;

    etchCanvas.style.gridTemplateColumns = `repeat(${700 / pixelSize}, ${pixelSize}px)`;
    etchCanvas.style.gridTemplateRows = `repeat(${700 / pixelSize}, ${pixelSize}px)`;

    for (let i = 0; i < numOfSquares; i++) {
        const etchPixel = document.createElement('div');

        etchPixel.classList.add('pixels');
        etchPixel.addEventListener('mouseover', applyColor)
        etchCanvas.appendChild(etchPixel);
    }
}

const inputCOolor = document.getElementById('input-color');
function applyColor(e) {
    // Get current color 
    const currentColor = inputCOolor.value
    e.target.style.backgroundColor = currentColor;
};



const buttons = document.querySelectorAll('.option');


buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        etchCanvas.innerHTML = '';
        let newResolution = parseInt(e.target.innerText.substr(-2));
        defineGrid(newResolution);
    })
})

