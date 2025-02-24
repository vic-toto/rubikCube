// RotateFace handles face rotations for both clock-wise and anti-clocwise
// these function calculate and save the changes in position of each minicube

function checkRotationValues(axis, axisValue, rotationVerse){
    //rotationVerse has to be a positive or negative int in order to define if the move is clock or anti-clockwise
    if (!rotationVerse){
        console.log("Error: invalid rotationVere in rotateFace() | rotationVerse: " +  rotationVerse);
        return (0);
    }
    // there is no fourth dimension in this project, so you can't have a different axis from x,y,z
    if (axis != 'x' && axis != 'y' && axis != 'z'){
        console.log("Error: invalid axis in rotateFace() | axis: " +  axis);
        return (0);
    }
    // you can't move something that does not exist 
    if (axisValue > cubeMaxCoordinate){
        console.log("Error: invalid axisValue in rotateFace() | cubeLength:  " + cubeLength + " axisValue: " + axisValue);
        return (0);
    }
    return (1);
}

function    calculateRotation(miniCube, axis){

    let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);

    const currentPos = new Map();
    currentPos.set('x', [currentX, currentZ, cubeMaxCoordinate - currentY]);  
    currentPos.set('y', [cubeMaxCoordinate - currentZ , currentY, currentX]);  
    currentPos.set('z', [cubeMaxCoordinate - currentY, currentX, currentZ]);
    miniCube.dataset.position = currentPos.get(axis);
}


function rotateFace(axis, axisValue, rotationVerse) {

    if (!(checkRotationValues(axis, axisValue, rotationVerse)))
        return ; 

    const miniCubes = document.querySelectorAll('.mini-cube');
    
    miniCubes.forEach(miniCube => {
        let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
        const current = new Map();
        current.set('x', currentX);
        current.set('y', currentY);
        current.set('z', currentZ);

        if (current.get(axis) === axisValue) {
            calculateRotation(miniCube, axis);
            doRotation(miniCube, axis, rotationVerse);    
        } else 
            miniCube.dataset.prevTransform = miniCube.style.transform; //this is to allow ctrl+z to undo the move, without undoing all moves on all minicubes
    });
}
