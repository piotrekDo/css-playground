const lolBtn = document.getElementById('lol');

let isLeft = true
lolBtn.addEventListener('mouseenter', () => {
    if(isLeft){
        lolBtn.classList.add('moveRight')
        lolBtn.classList.remove('moveLeft')
    } else {
        lolBtn.classList.add('moveLeft')
        lolBtn.classList.remove('moveRight')
    }
    isLeft = !isLeft

})