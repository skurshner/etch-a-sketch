// assign grid container reference
const grid = document.getElementById('container');

// target clear button
const button = document.getElementById('clear');
    // when button clicked, run function to collect number of squares
    button.addEventListener('click', promptNumberOfSquares)

// prompt user for number of squares on page load
promptNumberOfSquares();

// display a prompt to collect number of squares from user
function promptNumberOfSquares () {
    // set variable for number of squares based on prompt input
    let numberOfSquares = prompt('How many squares per side?')
    // limit number of squares to 100
    if (numberOfSquares > 100) numberOfSquares = 100;
    // call function to create squares with amount entered by user   
    createSquares(numberOfSquares);
}

// create square divs to enter into grid
function createSquares (n) {
    // remove any squares that currently exist
    removeSquares();
    // loop number entered by user times itself
    for (i = 0; i < n*n; i++) {
        // add a new square div in the DOM
        let square = document.createElement('div');
        // add class "square" to newly created div
        square.classList = "square";
        // add square div as child of grid
        grid.appendChild(square);
        // update grid attribute of parent grid columns to number entered by user
        grid.style.gridTemplateColumns = 'repeat('+ n +', 1fr)';
        // set background color of grid
        grid.style.backgroundColor = 'black';
    }
    // assign class to divs if they are hovered over
    assignClass();
}

// assign class to div on hover
function assignClass() {
    // select all elements with class "square" and create nodelist "squares"
    const squares = document.querySelectorAll('.square');
    // select each square within nodelist "squares"
    squares.forEach((square) => {
        // add event listener for mouse hover over "square"
        square.addEventListener('mouseenter', () => {
        // add class "filed" to "square" on mouse hover
        square.classList.add('filled');
        })
    });
}

// remove any squares from the DOM
function removeSquares () {
    // create nodelist "squares" from all divs with class "square"
    const squares = document.querySelectorAll('.square');
    // loop through each item in nodelist "squares"
    for (i = 0; i < squares.length; i++) {
        // remove all existing squares from the DOM
        squares[i].parentNode.removeChild(squares[i]);
    }
}