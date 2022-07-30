const tails = window.document.querySelector('.tails');
const pipe = window.document.querySelector('.pipe');
const score = window.document.querySelector('.score');

const tailsAttributes = {
    alive: true
}


const loop = setInterval(() => {
    const pipePos = pipe.offsetLeft;
    const tailsPos = +window.getComputedStyle(tails).bottom.replace('px','');
    let soundEffect = new Audio('./soundtracks/screaming.mp3');
    // let soundtrackBg = new Audio('./soundtracks/sountrackbg.mp3');
    let scoreCount = 0;

    // soundtrackBg.play();

    if(pipePos <= 195 && pipePos > 45 && tailsPos <= 80){ 
        soundEffect.play();
        tails.src = './images/tails-death.png';
        tailsAttributes.alive = false;
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePos}px`;

        tails.style.bottom = `${tailsPos}px`;
        tails.classList.add('death');

        setTimeout(() => {
            tails.style.bottom = '-100%';
        },700);

        clearInterval(loop);
    }

    score.innerHTML(`Score: ${scoreCount}`);

    scoreCount++;
},10);

const jump = () => {
    let soundEffect = new Audio('./soundtracks/no.mp3');

    if(tailsAttributes.alive){
        soundEffect.play();
        tails.classList.add('jump');
        tails.src = './images/tails-jump.gif';
    
        setTimeout(() => {
            tails.classList.remove('jump');
        },650);
    
        setTimeout(() => {
            if(tailsAttributes.alive)
                tails.src = './images/tails-run.gif';
        },625);
    }
}

document.addEventListener('keydown',jump); 