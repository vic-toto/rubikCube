// functions.js

let isKeyDown = false;
let startY = 0;
let box = document.querySelector('.rubiks-cube');

// Add event listeners
document.documentElement.addEventListener('mousedown', toggleMouseState);
document.documentElement.addEventListener('mousemove', handleMouseMove);
document.documentElement.addEventListener('mouseup', () => (isKeyDown = false));

function toggleMouseState(event) {
    // Check if the click is outside the cube
    if (!box.contains(event.target)) {
        isKeyDown = true;
    } else {
        isKeyDown = false;
    }
}

// Handles mouse movement and rotates the cube
function handleMouseMove(e) {
    if (isKeyDown) {
        rotateCube(e.clientX, e.clientY);
    }
}

// Rotates the cube based on mouse position
function rotateCube(x, y) {
    let xValue = Math.floor(x / 2 + 100);
    let yValue = Math.floor(y / 2 + 100);
    box.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
}


function rotateFrontClockwise() {
        const miniCubes = document.querySelectorAll('.mini-cube');
        miniCubes.forEach(miniCube => {
             let [x, y, z] = miniCube.dataset.position.split(",").map(Number);
    
            // // Only process mini-cubes on the front face (z = 1)
            if (z === 1) {
                if (y == 0)
                    miniCube.style.transform += `translate3d(${((x*100*-1)+200)}px, ${(x*100)}px, 0px) rotateZ(90deg)`;
                if (y == 1){
                    if (x == 0)
                        miniCube.style.transform += 'translate3d(100px, -100px, 0px) rotateZ(90deg)';
                    if (x == 1)
                        miniCube.style.transform += 'rotateZ(90deg)';
                    if (x == 2)
                        miniCube.style.transform += 'translate3d(-100px, 100px, 0px) rotateZ(90deg)';
                }
                if (y == 2)
                    miniCube.style.transform += `translate3d(${((x*-100))}px, ${((x*100)-200)}px, 0px) rotateZ(90deg)`;
            }
        });
    }

function rotateLeftAntiClockwise() {
    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
         let [x, y, z] = miniCube.dataset.position.split(",").map(Number);

        // // Only process mini-cubes on the front face (z = 1)
        if (x === 0) {
            console.log(miniCube.id);
            if (z == 1)
                miniCube.style.transform += `translate3d(0px, ${(y*-100)}px, ${((y*100)-200)}px) rotateX(90deg)`;
            if (z == 0){
                if (y == 0)
                    miniCube.style.transform += 'translate3d(0px, 100px, -100px) rotateX(90deg)';
                if (y == 1)
                    miniCube.style.transform += 'rotateX(90deg)';
                if (y == 2)
                    miniCube.style.transform += 'translate3d(0px, -100px, 100px) rotateX(90deg)';
            }
            if (z == -1)
                miniCube.style.transform += `translate3d(0px, ${((y*-100)+200)}px, ${((y*100))}px) rotateX(90deg)`;
        }
    });
}



    
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight')
        rotateFrontClockwise();
    else if (event.key === 'ArrowDown') 
        rotateLeftAntiClockwise();
});
    

