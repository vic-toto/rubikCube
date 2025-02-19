//Clockwise and Anti-clockwise functions to handle face rotations
// these function calculate and save the changes in position of each minicube

function rotateClockwise(axis, axisValue) {

    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {

        let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
        const current = new Map();
        current.set('x', currentX);
        current.set('y', currentY);
        current.set('z', currentZ);

        const equivalentX = new Map();    // equivalentX and equivalent X are placeholder variables, 
        equivalentX.set('x', currentZ);   //useful to treat all faces with the same logic.
        equivalentX.set('y', currentZ);   //  So, e.g., if I'm rotating Z, X and Y will be X and Y, but if 
        equivalentX.set('z', currentX);   // we are rotating Y, we look at the upper face imagining  
                                          // Z is the Y axis and X is still X
        const equivalentY = new Map();
        equivalentY.set('x', currentY);
        equivalentY.set('y', currentZ);
        equivalentY.set('z', currentY);

        if (current.get(axis) === axisValue) {
            const currentPos = new Map();

            if (equivalentY.get(axis) == 0) { 
                currentPos.set('z', [2, currentX, currentZ]);
                currentPos.set('y', [2, currentY, currentX]);
                currentPos.set('x', [currentX, currentZ, 2-currentZ]);  

            } else if (equivalentY.get(axis) == 1) {

                if (equivalentX.get(axis) == 0){
                    currentPos.set('z', [1, 0, currentZ]);
                    currentPos.set('y', [2, currentY, currentX]);

                } else if (equivalentX.get(axis) == 1)
                    currentPos.set(axis,[currentX, currentY, currentZ]);

                else if ((equivalentX.get(axis) == 2)){
                    currentPos.set('z', [1, 2, currentZ]);
                    currentPos.set('y', [0, currentY, currentX]);
                }
                
            } else if (equivalentY.get(axis) == 2) {
                //roba
                currentPos.set('z', [0, currentX, currentZ]);
                currentPos.set('y', [0, currentY, currentX]);
                // currentPos.set('x', [currentX, currentZ, 2-currentZ]);
                
            }
            miniCube.dataset.position = currentPos.get(axis);
            doTransformation(miniCube, axis, 1);
             
        } else 
            miniCube.dataset.prevTransform = miniCube.style.transform;
    });
}
