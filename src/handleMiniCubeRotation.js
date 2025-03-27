 // don't judge me you wrote terrible code when you started too 
 // These functions handle the css rotation of the minicubes 
//  function calculateRotations(miniCube, fixedAxis, rotationVerse){

function rotatingZ(miniCube, resX, resY, rotationVerse) {
    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

    if (resX == 0){

        
        if (resY == 0){
            rotZ += 90*rotationVerse;
            console.log("rotZ" + rotZ);
        }

        else if ((resY == 1) || resY == -3) {
            rotZ += 90*rotationVerse;
            rotX -= 90*rotationVerse;
            rotY -= 90*rotationVerse;
        } 
        
        else if (resY == 2 || resY == -2)
            rotZ -= 90*rotationVerse;

        else if (resY == 3 || resY == -1){
            rotZ += 90*rotationVerse;
            rotX += 90*rotationVerse;
            rotY += 90*rotationVerse;
        }
    }
    else if (resX == 1 || resX == -3) {
            rotY += 90*rotationVerse;
    }

    else if (resX == 2 || resX == -2) {

        if (resY == 0)
            rotZ -= 90*rotationVerse;

        else if ((resY == 1) || resY == -3) {
            rotZ -= 90*rotationVerse;
            rotX += 90*rotationVerse;
            rotY += 90*rotationVerse;
        } 
        
        else if (resY == 2|| resY == -2)
            rotZ += 90*rotationVerse;

        else if (resY == 3 || resY == -1){
            rotZ -= 90*rotationVerse;
            rotX -= 90*rotationVerse;
            rotY -= 90*rotationVerse;
        }
    }

    else if (resX == 3 || resX == -1){
        if (rotY != 1 && rotY != 3)
            rotY -= 90*rotationVerse;;
    }      

    miniCube.dataset.rotX = rotX;
    miniCube.dataset.rotY = rotY;
    miniCube.dataset.rotZ = rotZ;

}

function rotatingX(miniCube, resX, resY, rotationVerse) {
    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

    if (resY == 0){

        
        if (resY == 0){
            rotZ += 90*rotationVerse;
            console.log("rotZ" + rotZ);
        }

        else if ((resY == 1) || resY == -3) {
            rotZ += 90*rotationVerse;
            rotX -= 90*rotationVerse;
            rotY -= 90*rotationVerse;
        } 
        
        else if (resY == 2 || resY == -2)
            rotZ -= 90*rotationVerse;

        else if (resY == 3 || resY == -1){
            rotZ += 90*rotationVerse;
            rotX += 90*rotationVerse;
            rotY += 90*rotationVerse;
        }
    }
    else if (resY == 1 || resY == -3) {
            rotY += 90*rotationVerse;
    }

    else if (resY == 2 || resY == -2) {

        if (resZ == 0)
            rotX -= 90*rotationVerse;

        else if ((resY == 1) || resY == -3) {
            rotZ -= 90*rotationVerse;
            rotX += 90*rotationVerse;
            rotY += 90*rotationVerse;
        } 
        
        else if (resY == 2|| resY == -2)
            rotZ += 90*rotationVerse;

        else if (resY == 3 || resY == -1){
            rotZ -= 90*rotationVerse;
            rotX -= 90*rotationVerse;
            rotY -= 90*rotationVerse;
        }
    }

    else if (resY == 3 || resY == -1){
        if (rotY != 1 && rotY != 3)
            rotY -= 90*rotationVerse;;
    }      

    miniCube.dataset.rotX = rotX;
    miniCube.dataset.rotY = rotY;
    miniCube.dataset.rotZ = rotZ;

}



function calculateRotations(miniCube, fixedAxis, rotationVerse) {
    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

    let resX = (rotX / 90) % 4;
    let resY = (rotY / 90) % 4;
    let resZ = (rotZ / 90) % 4;
    
    if (fixedAxis == 'x')
        rotX -= 90*rotationVerse;
    if (fixedAxis == 'y')
        rotY -= 90*rotationVerse;
    
    console.log("id " + miniCube.dataset.miniCubeId + " rotatingZ X " + resX + " Y " + resY + " Z " + resZ);

    if (fixedAxis == 'z')
        rotatingZ(miniCube, resX, resY, rotationVerse);
    else {
    miniCube.dataset.rotX = rotX;
    miniCube.dataset.rotY = rotY;
    miniCube.dataset.rotZ = rotZ;
    }
        
        

    // if (fixedAxis == 'x') {
    //     if (rotZ != 0 && (rotZ % 360 != 0) && rotY != 0 && (rotY % 360 != 0)) {
    //         if (resX == 1) //90 deg rotation or equivalent
    //             rotY += 90;
    //         if (resX == 2) //180 deg rotation or equivalent
    //             rotX += 90;
    //         if (resX == 3) //270 deg rotation or equivalent
    //             rotY -= 90;
    //     } else
    //         rotX -= 90;

    // } else if (fixedAxis == 'y'){
    //         if (resX == 1){
    //                rotZ += 90;
    //            // else 
    //            //     rotZ += 90;
    //         }
    //         else if (resX == 2 || resZ == 2 )
    //             rotY += 90;
    //          else  if (resX == 3){
    //             if (rotY != 0)
    //                 rotY -= 90;
    //             else 
    //                 rotZ -= 90;
    //         }
    //         else if (resZ == 1 && resX != 0){
    //              rotX -= 90;
    //             // rotZ -= 90
    //             rotY -= 90;
    //         } else if (resZ == 3 ){
    //             // rotX -= 90;
    //             // rotZ -= 90
    //             rotY += 90;
    //     }
    //         else
    //            rotY -= 90;


    //} 
}

//if rotationVerse is 1, it will behave in line with a clockwise rotation
// if rotationVerse is -1, it will behave in line with an anti-clockwise rotation
// it's not rocket science 

function doRotationOnAxis(miniCube, axis, rotationVerse){

    let currentPosition = miniCube.dataset.position.split(",").map(Number);
    let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
    calculateRotations(miniCube, axis, rotationVerse);

    
    miniCube.dataset.prevTransform = miniCube.style.transform;
    miniCube.style.transform = `translateX(${((currentPosition[0]*100) - (x*100))}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg) scale3d(1, 1, 1)`;
}

function undoRotation() {

    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        
        if (miniCube.dataset.prevTransform.length > 0) {
            miniCube.style.transform = miniCube.dataset.prevTransform; // Revert to the last saved state
        } else {
          console.log("No moves to undo.");
        }
  });
}