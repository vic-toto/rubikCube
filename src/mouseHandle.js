let box = document.querySelector('.rubiks-cube');
let button = document.querySelector('.pixel-button');

let isKeyDown = false;
let isAMove = false;
let xStart = 0;
let yStart = 0;
let xPrev = 0;
let yPrev = 0;

document.addEventListener('mousedown', toggleMouseState);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', toggleMouseState);

// Handles mouse down state for inside and outside the box
function toggleMouseState(event) {
    if (event.type === 'mousedown') {
        // Inside the cube, start tracking mouse movement
        if (box.contains(event.target)) {
            xStart = event.clientX;
            yStart = event.clientY;
            xPrev = xStart;
            yPrev = yStart;
            isAMove = true; // Start tracking mouse movement
            isKeyDown = true; // Mouse is pressed inside the box
        
        } else if (button.contains(event.target)){
            if (button.innerHTML == "SHUFFLE ME"){
                randomShuffle();
            }
        }
            else 
                isKeyDown = true;
    } else if (event.type === 'mouseup') {
        // Reset on mouse up
        isKeyDown = false;
        isAMove = false;
    }
}

// Handles mouse move events and distinguishes inside/outside behavior
function handleMouseMove(event) {
    if (isKeyDown) {
        if (isAMove && box.contains(event.target)) {
            // Inside the box, calculate deltas for movement
            const deltaX = event.clientX - xPrev;
            const deltaY = event.clientY - yPrev;

            // Log deltas for debugging
            console.log(`Delta X: ${deltaX}, Delta Y: ${deltaY}`);

            // Detect drag direction and log it
            if (Math.abs(deltaX) > Math.abs(deltaY) && (Math.abs(deltaY) < 100)) {
                console.log('Horizontal drag');
            } else if (Math.abs(deltaY) > Math.abs(deltaX) && (Math.abs(deltaX) < 100)){
                console.log('Vertical drag');
            } else {
                console.log('Circular or diagonal drag');
            }

            // Update previous mouse position for next delta calculation
            xPrev = event.clientX;
            yPrev = event.clientY;
        } else {
            // Outside the box, continue rotating the cube based on mouse position
            rotateCube(event.clientX, event.clientY);
        }
    }
}

// Rotates the cube based on mouse position when outside the box
function rotateCube(x, y) {
    let xValue = Math.floor(x / 2 + 100);  // Scale and center the X axis rotation
    let yValue = Math.floor(y / 2 + 100);  // Scale and center the Y axis rotation

    // Apply the transform to rotate the cube
    box.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
}
