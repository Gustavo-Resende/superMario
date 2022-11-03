const pipe = document.querySelector('.pipe')
const body = document.querySelector('body')
const jump = document.querySelector('.jump')
const mario = document.querySelector('.mario')
const clouds = document.querySelector('.cloud')

function jumpKey(){
    document.querySelector('.mario').classList.add('jump')

    setTimeout(()=>{
        document.querySelector('.mario').classList.remove('jump')}, 500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudPosition = clouds.offsetLeft;

    console.log(marioPosition)

    if (pipePosition <= 120 && marioPosition < 100 && pipePosition > 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/game-over.png'
        mario.classList.add('game-over')

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudPosition}px`;

        clearInterval(loop)
    }
}, 10);

addEventListener('keydown', jumpKey);
addEventListener('click', jumpKey)