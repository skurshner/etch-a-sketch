// assign grid container reference
const grid = document.getElementById('container');

// assign div reference
const divs = document.getElementsByClassName('square')

// create divs to enter into grid
function createDivs (n) {
    for (i = 0; i < n*n; i++) {
        let div = document.createElement('div');
        div.classList = "square";
        grid.appendChild(div);
        grid.style.gridTemplateColumns = 'repeat('+ n +', 1fr)'

    }
}

createDivs(100);
