// functions.js

let isKeyDown = false;
let startY = 0;
let box = document.querySelector('.rubiks-cube');

// Add event listeners
document.documentElement.addEventListener('mousedown', toggleMouseState);
document.documentElement.addEventListener('mousemove', handleMouseMove);

function toggleMouseState(event) {
    // Check if the click occurred outside the cube
    if (!box.contains(event.target)) {
        isKeyDown = !isKeyDown; // Toggle the state
        console.log(`Rotation ${isKeyDown ? 'enabled' : 'disabled'}`);
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
