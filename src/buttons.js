const funzioni = [rotateFace];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function shuffle(num){
    let esegui = funzioni[num];
    esegui(num);
    shuffleFunzioni(funzioni);
}

function shuffleFunzioni(funzioni) {
    for (let i = funzioni.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [funzioni[i], funzioni[j]] = [funzioni[j], funzioni[i]];
    }
}

async function randomShuffle(){

    let randomIndex = Math.floor(Math.random() * 20);

    for (let i = 0; i < randomIndex; i++) {
        const randomNumber = Math.floor(Math.random() * funzioni.length);
        shuffle(randomNumber);
        await sleep(1000);
    }

}

function solve(){
    //solves in 20 moves or less;
}

// enjoy as much as I do
function enjoy(){
    open("https://www.youtube.com/watch?v=zGMKLHVJ1D0");
}