
// Selecting elements and setting variables

const btnContainer = document.querySelector('.buttons-container');
const body = document.querySelector('body');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const eraseBtn = document.querySelector('.erase');
const gridSlider = document.querySelector('#myRange')
const gridSizeValue = document.querySelector('.sizeValue');

// VARIABLE HOLDING SIZE OF GRID VALUE ( DEFAULT: 16 )

gridSize = gridSlider.value;

// SHOWS THE GRID SIZE IN A PARAGRAPH ON THE PAGE

gridSizeValue.textContent = gridSize;



// Functions 

// GENERATES A RANDOM COLOR 

const getRandomColor = function () {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// VARIABLE HOLDING RANDOM COLOR 

let colorofblock = getRandomColor();

// TURNS TARGET OF EVENT A RANDOM COLOR

const changetoRainbow = function (e) {
    e.target.style.backgroundColor = getRandomColor();
}

// TURNS TARGET OF EVENT BLACK

const changetoBlack = function (e) {
    e.target.style.backgroundColor = 'black';
}

// TURNS A DIV A RANDOM COLOR WHEN MOUSE IS OVER DIV

const rainbowtrail = function (e) {
    e.target.style.backgroundColor = getRandomColor();
    btnContainer.addEventListener('mouseover', changetoRainbow )
}

// TURNS A DIV BLACK WHEN MOUSE IS OVER DIV

const blacktrail = function (e) {
    e.target.style.backgroundColor = 'black';
    btnContainer.addEventListener('mouseover', changetoBlack);
} 

// FORMS THE GRID BASED ON THE VALUE OF GRIDSIZE

const formGrid = function () {
    while (btnContainer.firstChild){
        btnContainer.removeChild(btnContainer.lastChild);
    }

    for (let i=0; i<gridSize; i++){
        const row = document.createElement('div');
        for (let j=0; j<gridSize; j++) {
            const btn = document.createElement('div');
            btn.style.width = `${500/Number(gridSize)}px`;
            btn.style.height = `${500/Number(gridSize)}px`;
            btn.classList.add('btn');
            row.appendChild(btn);
            row.classList.add('row');
            btnContainer.appendChild(row);
        }
    }    
}

// CHANGES THE SIZE OF THE GRID AND ERASES EVERYTHING ON THE GRID ( FORMS NEW GRID WITH NEW SIZE )

const changeSize = function() {
    gridSize = gridSlider.value;
    gridSizeValue.textContent = gridSize;
    while (gridSize > 100 || gridSize <= 0 || gridSize ==='null' ){
        gridSize = prompt('Choose between 1-100')
    }

    while (btnContainer.firstChild){
        btnContainer.removeChild(btnContainer.lastChild);
    }

    formGrid();
}

// Forms the sketching grid 

formGrid();

// GRID DIVS EVENTS ON CLICK

btnContainer.addEventListener('mousedown', blacktrail);
        body.addEventListener('mouseup', (e) => {
            btnContainer.removeEventListener('mouseover', changetoBlack);
        });

// GRID SLIDER EVENTS

gridSlider.addEventListener('click', changeSize);

// BLACK BUTTON EVENTS

blackBtn.addEventListener('click', () => {
    btnContainer.removeEventListener('mouseover', changetoRainbow);
    btnContainer.removeEventListener('mousedown', rainbowtrail);


    btnContainer.addEventListener('mousedown', blacktrail);
    body.addEventListener('mouseup', (e) => {
        btnContainer.removeEventListener('mouseover', changetoBlack);
    });
});

// RAINBOW BUTTON EVENTS

rainbowBtn.addEventListener('click', () => {
    btnContainer.removeEventListener('mouseover', changetoBlack);
    btnContainer.removeEventListener('mousedown',blacktrail);
    


    btnContainer.addEventListener('mousedown', rainbowtrail);
    body.addEventListener('mouseup', (e) => {
        btnContainer.removeEventListener('mouseover', changetoRainbow);
    });
});

// ERASE BUTTON EVENTS

eraseBtn.addEventListener('click', formGrid);




