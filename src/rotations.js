function doTransformation(miniCube, axis){
    let currentPosition = miniCube.dataset.position.split(",").map(Number);
    let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
    calculateRotations(miniCube, axis, 1);
    
    miniCube.dataset.prevTransform = miniCube.style.transform;
    miniCube.style.transform = `translateX(${(currentPosition[0]*100) - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg) scale3d(1, 1, 1)`;
}


function rotateClockwise(axis, axisValue) {

    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
        const current = new Map();
        current.set('x', currentX);
        current.set('y', currentY);
        current.set('z', currentZ);
        
        // equivalentX and equivalent X are placeholder variables, useful to treat all faces 
        // with the same logic. So, e.g., if I'm rotating Z, X and Y will be X and Y, but if 
        // we are rotating Y, we look at the upper face imagining that Z is the Y axis and X 
        // is still X

        const equivalentX = new Map();
        equivalentX.set('x', currentZ);
        equivalentX.set('y', currentZ);
        equivalentX.set('z', currentX);

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

                } else if (equivalentX.get(axis) == 1){
                    currentPos.set(axis,[currentX, currentY, currentZ]);

                } else if ((equivalentX.get(axis) == 2)){
                    currentPos.set('z', [1, 2, currentZ]);
                    currentPos.set('y', [0, currentY, currentX]);
                }
                //roba
                
            } else if (equivalentY.get(axis) == 2) {
                //roba
                currentPos.set('z', [0, currentX, currentZ]);
                currentPos.set('y', [0, currentY, currentX]);
                // currentPos.set('x', [currentX, currentZ, 2-currentZ]);
                
            }
            miniCube.dataset.position = currentPos.get(axis);
            doTransformation(miniCube, axis);
             
         } else 
         miniCube.dataset.prevTransform = miniCube.style.transform;
    });
}
