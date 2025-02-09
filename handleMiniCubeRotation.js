 function calculateRotations(miniCube, fixedAxis, rotationVerse){

    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

    //value map 
    // if z axis

    let resZ = ((rotZ/90) - (4 * (Math.floor((rotZ / 360)))));
    let resX = ((rotX/90) - (4 * (Math.floor((rotX / 360)))));
    let resY = ((rotY/90) - (4 * (Math.floor((rotY / 360)))));

    if (fixedAxis == 'x') {
        if (rotZ != 0 && (rotZ % 360 != 0) && rotY != 0 && (rotY % 360 != 0)) {
            console.log("rotatingX " + resX + " " + resY + " " + resZ); 
            if (resX == 1) //90 deg rotation or equivalent
                rotY -= 90;
            if (resX == 2) //180 deg rotation or equivalent
                rotX -= 90;
            if (resX == 3) //270 deg rotation or equivalent
                rotY += 90;
        } else
            rotX += 90;

    } else if (fixedAxis == 'y'){
        

            console.log( "id " + miniCube.dataset.miniCubeId + "rotatingY " + resX + " " + resY + " " + resZ);

            if (resX == 1){
                   rotZ += 90;
               // else 
               //     rotZ += 90;
            }
            else if (resX == 2 || resZ == 2 )
                rotY += 90;
             else  if (resX == 3){
                if (rotY != 0)
                    rotY -= 90;
                else 
                    rotZ -= 90;
            }
            else if (resZ == 1 && resX != 0){
                 rotX -= 90;
                // rotZ -= 90
                rotY -= 90;
            } else if (resZ == 3 ){
                // rotX -= 90;
                // rotZ -= 90
                rotY += 90;
            }
            else
               rotY -= 90;


    } else if (fixedAxis == 'z') {

            // here we have to check if X and Y have already been moved and how much
            // we already calculated it with resX and resY
            // some cases will overlap and cancel each other out
            //console.log("id " + miniCube.dataset.miniCubeId + " rotatingZ X " + resX + " Y " + resY + " Z " + resZ); 
            if (resX == 1){
                rotY += 90;
            } 
            else if (resX == 2 || resY == 2){
                rotZ -= 90;
            } 
            else if (resX == 3){
                rotY -= 90;
            } 
            else if (resY == 1){
                rotX -= 90;
                rotY -= 90
                rotZ += 90;

            }
            else if (resY == 3){
                rotX += 90;
                rotY += 90
                rotZ += 90;

            } else
                rotZ += 90;
   }  
             miniCube.dataset.rotX = rotX;
             miniCube.dataset.rotY = rotY;
             miniCube.dataset.rotZ = rotZ;
}