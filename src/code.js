
function calculateRotations(miniCube, fixedAxis, rotationVerse){

    let rotX = +miniCube.dataset.rotX;
    let rotY = +miniCube.dataset.rotY;
    let rotZ = +miniCube.dataset.rotZ;

    let resX = (rotX / 90) % 4;
    let resY = (rotY / 90) % 4;
    let resZ = (rotZ / 90) % 4;

    const mainRot = new Map();
    mainRot.set('x', rotX);  
    mainRot.set('y', rotY);  
    mainRot.set('z', rotZ);

    const currentResEquivalent = new Map();
    currentResEquivalent.set('x', resX);  
    currentResEquivalent.set('y', resY);  
    currentResEquivalent.set('z', resZ);

    const currentResEquivalentX = new Map();
    currentResEquivalentX.set('x', resY);  
    currentResEquivalentX.set('y', resX);  
    currentResEquivalentX.set('z', resX);

    const currentResEquivalentY = new Map();
    currentResEquivalentY.set('x', resZ);  
    currentResEquivalentY.set('y', resZ);  
    currentResEquivalentY.set('z', resY);


    const currentRes = currentResEquivalent.get(axis);

    if (resX == 0 && resY == 0)
        rotZ += 90; 
    if (resX == 0 && resY == 1)
    if (resX == 1 && resY == 0)
    if (resX == 1 && resY == 1)






    miniCube.dataset.rotX = rotX;
    miniCube.dataset.rotY = rotY;
    miniCube.dataset.rotZ = rotZ;
}