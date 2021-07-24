// assign grid container reference
const grid = document.getElementById('container');

promptNumberOfSquares();

// prompt user for number of square
function promptNumberOfSquares () {
    let numberOfSquares = prompt('How many squares per side?')
    if (numberOfSquares > 100) numberOfSquares = 100;   
    createSquares(numberOfSquares);
}

// create divs to enter into grid
function createSquares (n) {
    removeSquares();
    for (i = 0; i < n*n; i++) {
        let div = document.createElement('div');
        div.classList = "square";
        grid.appendChild(div);
        grid.style.gridTemplateColumns = 'repeat('+ n +', 1fr)'
    }
    assignClass();
}

// assign class to div on hover
function assignClass() {
    const divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
        div.classList = "filled";
        })
    });
}

function removeSquares () {
    const divsEmpty = document.querySelectorAll('.square');
    for (i = 0; i < divsEmpty.length; i++) {
        divsEmpty[i].parentNode.removeChild(divsEmpty[i]);
    }
    const divsFilled = document.querySelectorAll('.filled');
    for (i = 0; i < divsFilled.length; i++) {
        divsFilled[i].parentNode.removeChild(divsFilled[i]);
    }
   
}

// clear squares with button and prompt user for new square amount
const button = document.getElementById('clear');
button.addEventListener('click', () => {
    removeSquares();
    promptNumberOfSquares();
})