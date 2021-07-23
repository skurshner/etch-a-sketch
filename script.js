// assign grid container reference
const grid = document.getElementById('container');

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

// assign class to div on hover
const divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.classList = "filled";
        })
    }) 

;