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

function    calculateRotation(miniCube, axis, rotationVerse){

    let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);

    const equivalentX = new Map();    // equivalentX and equivalent X are placeholder variables, 
    equivalentX.set('x', currentZ);   //useful to treat all faces with the same logic.
    equivalentX.set('y', currentX);   //  So, e.g., if I'm rotating Z, X and Y will be X and Y, but if 
    equivalentX.set('z', currentX);   // we are rotating Y, we look at the upper face imagining  
                                      // Z is the Y axis and X is still X
    const equivalentY = new Map();
    equivalentY.set('x', currentY);
    equivalentY.set('y', currentZ);
    equivalentY.set('z', currentY);

    const currentPos = new Map();

    if (equivalentY.get(axis) == 0) { 
        currentPos.set('x', [currentX, currentZ, cubeMaxCoordinate]);  
        currentPos.set('y', [cubeMaxCoordinate, currentY, currentX]);
        currentPos.set('z', [cubeMaxCoordinate, currentX, currentZ])
    } else if (equivalentY.get(axis) == 1) {       
        if (equivalentX.get(axis) == 0){
            currentPos.set('x', [currentX, 0, cubeMidCoordinate]); // [currentX, 0, 1]);
            currentPos.set('y', [cubeMidCoordinate, currentY, 0]); //currentPos.set('y', [1, currentY, 0]);
            currentPos.set('z', [cubeMidCoordinate, 0, currentZ]); //currentPos.set('z', [1, 0, currentZ]);
            
            
        } else if (equivalentX.get(axis) == 1)
            currentPos.set(axis,[currentX, currentY, currentZ]);
        else if ((equivalentX.get(axis) == 2)){
            currentPos.set('x', [currentX, cubeMaxCoordinate, cubeMidCoordinate]); //[currentX, cubeMaxCoordinate, 1]);
            currentPos.set('y', [cubeMidCoordinate, currentY, cubeMaxCoordinate]); //[1, currentY, cubeMaxCoordinate]);
            currentPos.set('z', [cubeMidCoordinate, cubeMaxCoordinate, currentZ]); //[1, cubeMaxCoordinate, currentZ]);
        }   
    } else if (equivalentY.get(axis) == cubeMaxCoordinate) {
        currentPos.set('x', [currentX, currentZ, 0]);    
        currentPos.set('y', [0, currentY, currentX]);
        currentPos.set('z', [0, currentX, currentZ]);
    }
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
            calculateRotation(miniCube, axis, rotationVerse);
            doRotation(miniCube, axis, rotationVerse);    
        } else 
            miniCube.dataset.prevTransform = miniCube.style.transform; //this is to allow ctrl+z to undo the move, without undoing all moves on all minicubes
    });
}
