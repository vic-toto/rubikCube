

function rotateZClockwise(axisValue) {
        const miniCubes = document.querySelectorAll('.mini-cube');
        miniCubes.forEach(miniCube => {
            let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
            let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
            if (currentZ === axisValue) {
                
            let currentPosition = [currentX, currentY, currentZ];
            calculateRotations(miniCube, 'z', 1);

                if (currentY == 0) {
                    currentPosition = [2, currentX, currentZ];
                    miniCube.style.transform = `translateX(${(currentPosition[0]*100) - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`;
                
                } else if (currentY == 1) {
                    if (currentX == 0){
                        currentPosition = [1, 0, currentZ];
                        miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1] - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)` ;
                    } else if (currentX == 1){
                        currentPosition = [currentX, currentY, currentZ];
                        miniCube.style.transform = `rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) translateZ(${(z*100)}px)`;
                    } else if (currentX == 2){
                        currentPosition = [1, 2, currentZ];
                        miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`;
                    }
                
                } else if (currentY == 2){
                    currentPosition = [0, currentX, currentZ];
                    miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`
                }
                miniCube.dataset.position = currentPosition.join(",");
                
            }
        });
}

function rotateYClockwise(axisValue) {
    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
        let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
        if (currentY === axisValue) {
           
            let currentPosition = [currentX, currentY, currentZ];
            calculateRotations(miniCube, 'y', 1);

            
            if (currentZ == 0) {
                currentPosition = [2, currentY, currentX];
                miniCube.style.transform = `translateX(${(currentPosition[0]*100 - (x*100))}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100) }px)  rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg)`;  
            } else if (currentZ == 1) {
                if (currentX == 0){
                    currentPosition = [1, currentY, 0];
                    miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${( currentPosition[2]*100)}px) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg)` ;
                } else if (currentX == 1){
                    currentPosition = [currentX, currentY, currentZ];
                    miniCube.style.transform = `rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) translateZ(${(z*100)}px))`;
                } else if (currentX == 2){
                    currentPosition = [1, currentY, 2];
                    miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px)  rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg)`;
                }
            
            } else if (currentZ == 2){
                currentPosition = [0, currentY, currentX];
                miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px)  rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg)`
            }
            miniCube.dataset.position = currentPosition.join(",");
           
        }
    });
}


function rotateXAntiClockwise(axisValue) {
    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        
        let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
        let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);

        if (currentX === axisValue) {

            let currentPosition = [currentX, currentY, currentZ];
            calculateRotations(miniCube, 'x', -1);

            if (currentY == 0) {
                currentPosition = [currentX, 2-currentZ, 0];
                miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${(currentPosition[1]*100) - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`;            
            
            } else if (currentY == 1) {
                if (currentZ == 0){
                    currentPosition = [currentX, 2, 1];
                    miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${(currentPosition[1]*100) - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`; ;
                } else if (currentZ == 1){
                    currentPosition = [currentX, currentY, currentZ];
                    miniCube.style.transform = `rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) translateZ(${(z*100)}px) `;
                } else if (currentZ == 2){
                    currentPosition = [currentX, 0, 1];
                    miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${((currentPosition[1]*100)-(y*100))}px) translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`;
                }
            
            } else if (currentY == 2){
                currentPosition = [currentX, 2-currentZ, 2];
                miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${(currentPosition[1]*100) - (y*100)}px)  translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg)`
             }
            miniCube.dataset.position = currentPosition.join(",");
        }
    });
    
}

    
document.addEventListener('keydown', (event) => {
    if (event.key === 'f')
        rotateZClockwise(2);
    else if (event.key === 'm')
        rotateZClockwise(1);
    else if (event.key === 'b')
        rotateZClockwise(0);
    else if (event.key === 'l') 
         rotateXAntiClockwise(0);
    else if (event.key === 'c') 
        rotateXAntiClockwise(1);
    else if (event.key === 'r') 
        rotateXAntiClockwise(2);
    else if (event.key === 'u') 
        rotateYClockwise(0)
    else if (event.key === 'C') 
        rotateYClockwise(1)
    else if (event.key === 'd') 
        rotateYClockwise(2)
});
    



// function rotateLeftAntiClockwise() {
//     const miniCubes = document.querySelectorAll('.mini-cube');
//     miniCubes.forEach(miniCube => {
//          let [x, y, z] = miniCube.dataset.position.split(",").map(Number);

//         if (x === 0) {
//             console.log(miniCube.id);
//             if (z == 0)
//                 miniCube.style.transform = `translate3d(0px, ${((y*-100)+200)}px, ${((y*100))}px) rotateX(90deg)`;
//             if (z == 1){
//                 if (y == 0)
//                     miniCube.style.transform = 'translate3d(0px, 100px, -100px) rotateX(90deg)';
//                 if (y == 1)
//                     miniCube.style.transform = 'rotateX(90deg)';
//                 if (y == 2)
//                     miniCube.style.transform = 'translate3d(0px, -100px, 100px) rotateX(90deg)';
//             }
//             if (z == 2)
//                 miniCube.style.transform = `translate3d(0px, ${(y*-100)}px, ${((y*100)-200)}px) rotateX(90deg)`;
//         }
//     });
// }

// function doTransformation(minicube, x, y, z, axis, rot){
//     miniCube.style.transform += `translate3d(${x}px, ${y}px, ${z}px) rotate${axis}(${rot*90}deg)`
// }

// function rotateClockwise(fixedAxis, fixedValue){

//     // This lookup table is useful to dynamically handle the rotation of any of the faces
//     // I have three coordinates: one of them I will use to determine which coordinate is fixed 
//     // I will use one of the mover coordinates to iterate through the mini-cubes
//     // The changer coordinate will determine the new position and transform effect

//     const axisMap = {
//         x: {fixed: x, mover: y, changer: z },
//         y: {fixed: y, mover: z, changer: x },
//         z: {fixed: z, mover: x, changer: y }
//     };

//     const { fixed, mover, changer } = axisMap[fixedAxis];

//     const miniCubes = Array.from(document.querySelectorAll('.mini-cube')).filter(miniCube => {
//         const [x, y, z] = miniCube.dataset.position.split(",").map(Number);
//         return { x, y, z }[fixedAxis] === fixedValue;
//     });

    // miniCubes.forEach(miniCube => {
    //     if (mover == lowestValue)
    //         dotransformation(minicube, (200 - (changer*100)), changer*100, 0, fixed, 1);
    //    if (mover == 1midValue){
    //         if (x == 0)
    //             dotransformation(minicube, 100, -100, 0, "X", 1);
    //    } 
    //   if (mover == highestValue)
//     //      
// }

