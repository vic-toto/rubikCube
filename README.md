To do: 

- Set background and create cube ✅
- figure out how to make each section of the cube rotate up, down, left and right (have to split the cube into sections one way or another)

- code main cube movements per section

- add actions 
    3- if you click and drag left, right, up or down the cube section rotates

    4. add button "shuffle" and "solve"✅
    5. display result 

- figure out how to solve the cube in less than 20 moves





transform 3d 
y = 0:
 x = 0; x= 1; x = 2 (transform (x*-200)+200) (x*-200)+200)
y = 1 
(transform (y*-100)+200) (x*-200)+200)

function rotateFrontClockwise("z", 1, y, x) (fixed, value, mover, changer){
        const miniCubes = document.querySelectorAll('.mini-cube');
        miniCubes.forEach(miniCube => {

            a way to figure out which of x y z has to be constant 
            a way to determine which of the coordinates will be used to iterate the cycle 
            a way to determinate which of the coordinates will impact the transofrm and new position 

            a general piece of code that can handle all clockwise moves for any given face and any given coordinates

            trying to build on this code underneath. Lets not write code right now but understand how to organise the problem 

            let [x, y, z] = miniCube.dataset.position.split(",").map(Number);

            if (z === value && variableName(z)) {
                if (y == 0){
                    miniCube.style.transform += `translate3d(${(changerx*-100)+200)}px, ${(changer*100)}px, ${(0)}px) rotateZ(90deg)`;
                    // newPosition = [2-x, x, z];
                }
                if (y == 1){
                    if (x == 0){
                        miniCube.style.transform += 'translate3d(100px, -100px, 100px) rotateZ(90deg)';
                        // newPosition = [x+1, y-1, z];
                    }
                    if (x == 1)
                        miniCube.style.transform += 'rotateZ(90deg)';
                    if (x == 2){
                        miniCube.style.transform += 'translate3d(-100px, 100px, 100px) rotateZ(90deg)';
                        // newPosition = [x-1, y+1, z];
                    }
                }
                if (y == 2){
                    miniCube.style.transform += `translate3d(${((x*-100))}px, ${((x*100)-200)}px, ${(z*100)}px) rotateZ(90deg)`;
                    // newPosition = [0, x, z];
                }
                // miniCube.dataset.position = newPosition.join(",");
                console.log("id " + miniCube.id + " " + miniCube.dataset.position);
            }
        });
    }

    I have position with [x,y,z]
    one of the three coordinates is fixed 
    one of the three cordinates filters the minicubes
    one of the three coordinates manipulates transform and position


    F: z = 1 rotateClocwise("z", 1, y, x)
    F' z = 1
    M: z = 0
    M' z = 0
    B z = -1
    B' z = -1

    L: x = 0;
    L' x = 0;
    C x = 1;
    C' x = 1;
    R x = 2;
    R1 x = 2;

    U y = 0;
    U' y = 0;
    S = y = 1 second from top 
    S' y = 1;
    D y = 2;
    D' y = 2;
               filter all minicubes with coordinate == fixed coordinate
               if a coordinate is > than an interested second coordinate, then a condition of movement and change of position applies


function doTransformation(minicube, x, y, z, axis, rot){
    miniCube.style.transform += `translate3d(${x}px, ${y}px, ${z}px) rotate${axis}(${rot*90}deg)`
}

function rotateZ(fixedCoordinate, rotationDirection){
    const miniCubes = document.querySelectorAll('.mini-cube');
    miniCubes.forEach(miniCube => {
        let [x, y, z] = miniCube.dataset.position.split(",").map(Number);
        if (z == fixedCoordinate){
           if (y == 0)
                dotransformation(minicube, (200 - (x*100)), x*100, 0, "X", rotatiomDirection);
           if (y == 1){
                if (x == 0)
                    dotransformation(minicube, 100, -100, 0, "X", 1);
           } 
        })
}

4 formulas
(200 - (num*100)) (num*100);
(100)(-100)
(0)(0)(0)
(-100)(100)
(num*-100) ((num*100)-200)

if F
rotateZ(1, 1){
    foreach minicube with z == 1; 
    first row
    dotransformation(minicube, (200 - (x*100)), x*100, 0, "X", 1);
    second row 

    third row
     dotransformation(minicube, (x*100), (x*100)-200, 0);

    to first three mini cubes 
}

if z == 0 
for x = 0; x < 3; x++
dotransformation((200 - (x*100)), x*100, 0);



new idea

fare un controllo sul transform attuale e ricavare ciò che deve essere trasformato
se ho ruotatoZ 90, allora per ruotareX in realtà devo ruotareY e viceversa
se ho ruotatoZ si 180, allora per ruotare X devo ruotare Xdeg*-1 
