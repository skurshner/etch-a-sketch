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
    const empty = document.querySelectorAll('.square');
    for (i = 0; i < empty.length; i++) {
        empty[i].parentNode.removeChild(empty[i]);
    }
    const filled = document.querySelectorAll('.filled');
    for (i = 0; i < filled.length; i++) {
        filled[i].parentNode.removeChild(filled[i]);
    }
}

// clear squares with button and prompt user for new square amount
const button = document.getElementById('clear');
button.addEventListener('click', () => {
    removeSquares();
    promptNumberOfSquares();
})