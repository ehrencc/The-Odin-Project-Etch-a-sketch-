//variable containing the grid container div
const grid = document.querySelector('.grid');
//for loop to generate a 16x16 grid within the div
for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
        //variable containing clear button
        const clearBtn = document.getElementById('clearBtn');       
        const cellBox = document.createElement('div');
        cellBox.classList.add('cell');
        grid.appendChild(cellBox);
        //add event listener to each cell
        cellBox.addEventListener('click', function() {
            cellShaded(cellBox);
          });
          //event listener for eraser button
        clearBtn.addEventListener('click', function() {
            cellShadedDef(cellBox);
          });
    }
}

// event listener function to change cell color
function cellShaded(cell) {
    cell.style.backgroundColor = 'black';
  }
//event listener function to change cell color back to default
function cellShadedDef(cell) {
    cell.style.backgroundColor = 'whitesmoke';
  }


