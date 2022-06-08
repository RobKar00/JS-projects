const area = document.getElementsByClassName('area')[0];
let moveCount = 0;
let result = '';

const contentWrapper = document.getElementById('content');
const modalResult = document.getElementsByClassName('modal-result-wrapper')[0];
const overlay = document.getElementById('overlay')
const closeButton = document.getElementById('btn-close')

area.addEventListener('click', e => {
    if(e.target.innerHTML) return;
    if(e.target.className = 'box') {
        moveCount % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        ++moveCount;
        check();
    }
});
 
const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i < arr.length; i++) {
        if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'Player 1';
            prepareResult(result);
        }
        if(boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O') {
            result = 'Player 2';
            prepareResult(result);
        }
    }
    if(!result && moveCount == 9) {
        result = 'Nobody';
        prepareResult(result);
    }
} 

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner} wins!!!`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

closeButton.addEventListener('click', closeModal);
