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



    
document.addEventListener('keydown', (event) => {
    if (event.key === 'f')
        rotateFace('z', 2, 1);
    if (event.key === 'F')
        rotateFace('z', 2, -1);
    else if (event.key === 'm')
        rotateFace('z', 1, 1);
    else if (event.key === 'b')
        rotateFace('z', 0, 1);
     else if (event.key === 'l') 
        rotateFace('x', 0, 1);
     else if (event.key === 'L') 
        rotateFace('x', 0, -1);
     else if (event.key === 'c') 
        rotateFace('x', 1, 1);
     else if (event.key === 'r') 
        rotateFace('x', 2, 1);
    else if (event.key === 'u') 
        rotateFace('y',0, 1)
    else if (event.key === 'U') 
        rotateFace('y',0, -1)
    else if (event.key === 'C') 
        rotateFace('y', 1, 1)
    else if (event.key === 'd') 
        rotateFace('y', 2, 1)
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "z")
      undoRotation(); // Undo the last move if Ctrl+Z is pressed
  });
