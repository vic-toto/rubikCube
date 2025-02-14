function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function shuffle(i, num){
    if (i % 2 != 0)
            rotateXAntiClockwise(num);
        else 
            rotateYClockwise(num);
}

async function randomShuffle(){

    for (let i = 0; i < 10; i++) {

        const randomNumber = Math.floor(Math.random() * 3);
        shuffle(i, randomNumber);
        await sleep(1000);
    }

}