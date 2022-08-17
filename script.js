
function createGrid(size) {
    const gridContainer = document.querySelector(".grid")
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {square.remove()});

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size
    for(i = 1; i < amount-1; i++) {
        const boxes = document.createElement('div')
        boxes.classList.add('square')
        boxes.classList.add('box' + i)
        boxes.addEventListener('mouseover', ()=> {boxes.style.backgroundColor = "black"})
        gridContainer.appendChild(boxes)
    }
}






