// Select the rubiks cube container
const rubiksCube = document.querySelector('.rubiks-cube');

// Define the face names for the Rubik's Cube
const faceNames = ['front', 'back', 'top', 'bottom', 'left', 'right'];

// Create the faces of the Rubik's Cube
faceNames.forEach(faceName => {
    const face = document.createElement('div');
    face.classList.add('face', faceName);
    face.id = faceName;
    rubiksCube.appendChild(face);
});

// Define transformations for each face of the mini-cube
const miniCubeFaces = [
    { class: 'mini-cube-face front', color: 'red', transform: 'translateZ(50px)' },
    { class: 'mini-cube-face back', color: 'blue', transform: 'rotateY(180deg) translateZ(50px)' },
    { class: 'mini-cube-face top', color: 'yellow', transform: 'rotateX(90deg) translateZ(50px)' },
    { class: 'mini-cube-face bottom', color: 'white', transform: 'rotateX(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face left', color: 'green', transform: 'rotateY(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face right', color: 'orange', transform: 'rotateY(90deg) translateZ(50px)' },
];

let helper = 0;

for (let z = 1; z >= -1; z--) {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            // Create the mini-cube
            const miniCube = document.createElement('div');
            miniCube.classList.add('mini-cube');
            // Create and append each face to the mini-cube
            miniCubeFaces.forEach(faceData => {
                const face = document.createElement('div');
                face.className = faceData.class;
                face.style.backgroundColor = faceData.color;
                face.style.transform = faceData.transform;
                face.style.width = '100px';
                face.style.height = '100px';
                face.style.border = '1px solid #000'; // Optional: for visibility
                miniCube.appendChild(face);
            });
            // setting cube from top left to bottom right
            miniCube.style.transform = "translateZ(" + z*100 +"px)";
            miniCube.style.left = (x*100) + "px";
            miniCube.style.top = (helper*-300) + "px";
            // console.log("translate("+ (x*100) + "px," + (y*100) + "px) " + "translateZ("+ (z*100) +"px)");
            rubiksCube.appendChild(miniCube);
        }
        helper++;
    }
}
    




