let color = 'black';
const board = document.querySelector('.board');
// const squareSize = document.querySelector('.squareSize')
const gridSize = document.querySelector('.gridSizeText')
const gridValue = document.querySelector('.gridValue')
let value = 16;


// squareSize.onmousemove = e => {
//     size_num = e.target.value;
//     squareSize.textContent = `${square_size} x ${square_size}` 
// }



function inserting(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    
    for(let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        square.addEventListener('mouseover', createColor)
        board.insertAdjacentElement('beforeend' , square);
    } 

} inserting(value);

function changeSize(input){
        inserting(input);
        gridSize.textContent = gridValue.value;
}


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createColor(){
    if(color === 'random'){
        this.style.backgroundColor = getRandomColor();
    }else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){

    const squares = Array.from(board.querySelectorAll('div'))
    squares.forEach((square) =>{
        square.style.backgroundColor = 'blue';
    })
}