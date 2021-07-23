// assign grid container reference
const grid = document.getElementById('container');

// create divs to enter into grid
function createDivs (n) {
    for (i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.classList = "square"
        grid.appendChild(div);

    }
}
    
createDivs(16)