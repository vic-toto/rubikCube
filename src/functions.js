 // don't judge my code it's a work in progress
 
//  function rotateZClockwise(axisValue) {
//         const miniCubes = document.querySelectorAll('.mini-cube');
//         miniCubes.forEach(miniCube => {
//             let [x, y, z] = miniCube.dataset.position0.split(",").map(Number);
//             let [currentX, currentY, currentZ] = miniCube.dataset.position.split(",").map(Number);
//             if (currentZ === axisValue) {
                
//             let currentPosition = [currentX, currentY, currentZ];
//             calculateRotations(miniCube, 'z', 1);
//                 if (currentY == 0) 
//                     currentPosition = [2, currentX, currentZ]; 
//                 else if (currentY == 1) {
//                     if (currentX == 0)
//                         currentPosition = [1, 0, currentZ];
//                     else if (currentX == 1)
//                         currentPosition = [currentX, currentY, currentZ];
//                     else if (currentX == 2)
//                         currentPosition = [1, 2, currentZ];  
//                 } 
//                 else if (currentY == 2)
//                     currentPosition = [0, currentX, currentZ];
//                 miniCube.dataset.prevTransform = miniCube.style.transform;
//                 miniCube.style.transform = `translateX(${(currentPosition[0]*100) - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg) scale3d(1, 1, 1)`;
//                 miniCube.dataset.position = currentPosition.join(",");
                 
//             } else 
//             miniCube.dataset.prevTransform = miniCube.style.transform;
//         });
// }

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
            } else if (currentZ == 1) {
                if (currentX == 0)
                    currentPosition = [1, currentY, 0];
                else if (currentX == 1)
                    currentPosition = [currentX, currentY, currentZ];
                else if (currentX == 2)
                    currentPosition = [1, currentY, 2];
            
            } else if (currentZ == 2){
                currentPosition = [0, currentY, currentX];
            }
            miniCube.dataset.prevTransform = miniCube.style.transform;
            miniCube.style.transform = `translateX(${(currentPosition[0]*100) - (x*100)}px) translateY(${currentPosition[1]*100 - (y*100)}px) translateZ(${(currentPosition[2]*100)}px) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) rotateZ(${miniCube.dataset.rotZ}deg) scale3d(1, 1, 1)`;
            miniCube.dataset.position = currentPosition.join(",");
           
        } else 
        miniCube.dataset.prevTransform = miniCube.style.transform;
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
            } else if (currentY == 1) {
                if (currentZ == 0)
                    currentPosition = [currentX, 2, 1];
                else if (currentZ == 1)
                    currentPosition = [currentX, currentY, currentZ];
                else if (currentZ == 2)
                    currentPosition = [currentX, 0, 1];
            
            } else if (currentY == 2){
                currentPosition = [currentX, 2-currentZ, 2];
            }
            miniCube.dataset.prevTransform = miniCube.style.transform;
            miniCube.style.transform = `translateX(${currentPosition[0]*100 - (x*100)}px) translateY(${(currentPosition[1]*100) - (y*100)}px)  translateZ(${(currentPosition[2]*100)}px) rotateZ(${miniCube.dataset.rotZ}deg) rotateX(${miniCube.dataset.rotX}deg) rotateY(${miniCube.dataset.rotY}deg) scale3d(1, 1, 1)`
            miniCube.dataset.position = currentPosition.join(",");
        } else 
        miniCube.dataset.prevTransform = miniCube.style.transform;
    });
    
}

function undoMove() {

    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        
        if (miniCube.dataset.prevTransform.length > 0) {
            miniCube.style.transform = miniCube.dataset.prevTransform; // Revert to the last saved state
        } else {
          console.log("No moves to undo.");
        }
  });
}

    
document.addEventListener('keydown', (event) => {
    if (event.key === 'f')
        rotateClockwise('z', 2);
    if (event.key === 'F')
        rotateAntiClockwise('z', 2);
    else if (event.key === 'm')
        rotateClockwise('z', 1);
    else if (event.key === 'b')
        rotateClockwise('z', 0);
     else if (event.key === 'l') 
          rotateClockwise('x', 0);
     else if (event.key === 'c') 
         rotateClockwise('x', 1);
     else if (event.key === 'r') 
         rotateClockwise('x', 2);
    else if (event.key === 'u') 
        rotateClockwise('y',0)
    else if (event.key === 'C') 
        rotateClockwise('y', 1)
    else if (event.key === 'd') 
        rotateClockwise('y', 2)
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "z") {
      undoMove(); // Undo the last move if Ctrl+Z is pressed
      console.log("Move undone:");
    
    }
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

