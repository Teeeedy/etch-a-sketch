const btnContainer = document.querySelector('.buttons-container');
const resetBtn = document.querySelector('.resetButton');
let gridSize = 16;



const changetoBlack = function (e) {
    e.target.style.backgroundColor = 'black';
}

const blacktrail = function (e) {
    e.target.style.backgroundColor = 'black';
    btnContainer.addEventListener('mouseover', changetoBlack);
} 






for (let i=0; i<gridSize; i++){
    const row = document.createElement('div');
    for (let j=0; j<gridSize; j++) {
        const btn = document.createElement('div');
        btn.style.width = `${500/Number(gridSize)}px`;
        btn.style.height = `${500/Number(gridSize)}px`;
        btn.classList.add('btn');


        btnContainer.addEventListener('mousedown', blacktrail);
        
        btnContainer.addEventListener('mouseleave', (e) => {
            btnContainer.removeEventListener('mouseover', changetoBlack);
        });
       

        btnContainer.addEventListener('mouseup', (e) => {
            btnContainer.removeEventListener('mouseover', changetoBlack);
        });
       
            


        row.appendChild(btn);
        row.classList.add('row');
        btnContainer.appendChild(row);
    }
}


const changeSize = function() {
    gridSize = prompt('Choose the number of buttons per line (Default: 16x16)')
    while (gridSize > 100 || gridSize <= 0 || gridSize ==='null' ){
        gridSize = prompt('Choose between 1-100')
    }

    while (btnContainer.firstChild){
        btnContainer.removeChild(btnContainer.lastChild);
    }

    resetBtn.addEventListener('click', changeSize)



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


resetBtn.addEventListener('click', changeSize)



