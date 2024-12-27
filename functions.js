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


// Helper functions for position transformations
function addTwo(n) {
    return (n + 2); 
}

function removeTwo(n) {
    return (n -2); 
}

function addOne(n, m) {
    return [n + 1, m + 1]; 
}

function removeOne(n, m) {
    return [n - 1, m - 1];}

function addNRemoveOne(n, m) {
    return [n + 1, m - 1];}

// Function to rotate front face clockwise
function rotateFrontClockwise() {
    const miniCubes = document.querySelectorAll('.mini-cube');
    
    miniCubes.forEach(miniCube => {

        let [x, y, z] = miniCube.dataset.position.split(",");
        // console.log(z + " z id " + miniCube.dataset.miniCubeId);
        // console.log(x + " x id " + miniCube.dataset.miniCubeId);
        // console.log(y + " y id " + miniCube.dataset.miniCubeId);

        if (z == 1) {
            if (x == 0 && y == 0) {
                // Top-left corner mini-cube
                console.log("minicube id " + miniCube.dataset.miniCubeId + " old pos " + [x, y, z] );
                 const newPosition = [addTwo(x), y, z];

                console.log("minicube id " + miniCube.dataset.miniCubeId + " new pos " + newPosition );
                 miniCube.dataset.position = JSON.stringify(newPosition);

                console.log("minicube id " + miniCube.dataset.miniCubeId + " dataset.pos " + miniCube.dataset.position );
                 miniCube.style.transform += ' rotateZ(90deg)';
            } else if (x == 1 && y == 0) {
                 // Top-center mini-cube
                 const newPosition = addNRemoveOne(x, y);
                 miniCube.dataset.position = JSON.stringify(newPosition);
                 miniCube.style.transform += ' rotateZ(90deg)';
            }
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        rotateFrontClockwise();
    }
});

