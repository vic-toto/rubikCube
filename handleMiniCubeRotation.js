 function calculateRotations(miniCube, fixedAxis, rotationVerse){

    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

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

    } if (fixedAxis == 'y'){
        if ((rotX != 0 && (rotX % 360 != 0)) ) {

            console.log("rotatingY " + resX + " " + resY + " " + resZ); 
             if (resX == 1){
                if (rotY != 0)
                    rotY += 90;
                else 
                    rotZ += 90;
             }
            if (resX == 2)
                rotY += 90;
            if (resX == 3){
                if (rotY != 0)
                    rotY -= 90;
                else 
                    rotZ -= 90;
            }
        } else
            rotY -= 90;

    } if (fixedAxis == 'z'){

        if ((rotY != 0 && (rotY % 360 != 0)) || ( rotX != 0 && (rotX % 360 != 0))) {

            console.log("rotatingZ " + resX + " " + resY + " " + resZ); 

            // if (resY == 1){
            //    if (resZ % 2 != 0)
            //         rotZ -= 90; 
            //    else
            //         rotX -= 90;
            // }
           if (resY == 2){

            if (resZ % 2 != 0)
                rotZ += 90
            else 
                rotY -= 90;
                
        }
           if (resY == 3 ) {
               if (resZ % 2 != 0)
                    rotX -= 90;
                else
                    rotZ += 90; 
           }
        }
        else
            rotZ += 90;
        
    }

    miniCube.dataset.rotX = rotX;
    miniCube.dataset.rotY = rotY;
    miniCube.dataset.rotZ = rotZ;
}