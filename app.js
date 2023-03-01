const grid = document.querySelector('.grid');

for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
        const cellBox = document.createElement('div');
        cellBox.classList.add('cell');
        grid.appendChild(cellBox);
    }
}