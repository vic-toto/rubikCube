// Select the rubiks cube container
const rubiksCube = document.querySelector('.rubiks-cube');
rubiksCube.style.transform = "rotateX(-10deg) rotateY(20deg)";

let cubeMaxCoordinate = -1;
let id = 0;

// Define the face names for the Rubik's Cube
const faceNames = ['front', 'back', 'top', 'bottom', 'left', 'right'];

// Define transformations for each face of the mini-cube
const miniCubeFaces = [
    { class: 'mini-cube-face front', color: '#98FF98', transform: 'translateZ(50px)' },
    { class: 'mini-cube-face back', color: '#D8B6FF', transform: 'rotateY(180deg) translateZ(50px)' },
    { class: 'mini-cube-face top', color: '#FFB6C1', transform: 'rotateX(90deg) translateZ(50px)' },
    { class: 'mini-cube-face bottom', color: '#FFCC99', transform: 'rotateX(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face left', color: '#ADD8E6', transform: 'rotateY(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face right', color: '#FFFFE0', transform: 'rotateY(90deg) translateZ(50px)' },
];

// Create the faces of the Rubik's Cube
faceNames.forEach(faceName => {
    const face = document.createElement('div');
    face.classList.add('face', faceName);
    face.id = faceName;
    rubiksCube.appendChild(face);
});

let cubeSize = 5;
cubeMaxCoordinate = cubeSize - 1;

for (let z = 0; z < cubeSize ; z++) {
    for (let x = 0; x < cubeSize; x++) {
        for (let y = 0; y < cubeSize; y++) {

            if ((!(x > 0 && x < cubeSize-1)) || (!(y > 0 && y < cubeSize-1)) || (!(z > 0 && z  < cubeSize-1))){
            
            // Create the mini-cube
            const miniCube = document.createElement('div');
            miniCube.classList.add('mini-cube');
            // Create and append each face to the mini-cube
            miniCube.dataset.miniCubeId = id;
            miniCubeFaces.forEach(faceData => {
                const face = document.createElement('div');
                face.className = faceData.class;
                face.style.backgroundColor = faceData.color;
                face.style.transform = faceData.transform;
                face.innerHTML = miniCube.dataset.miniCubeId + " " + face.className;
                miniCube.appendChild(face);
            });
            // setting cube from top left to bottom right
            miniCube.dataset.position = [x, y, z];
            miniCube.dataset.position0 = [x, y, z];
            miniCube.dataset.rotZ = 0;
            miniCube.dataset.rotX = 0;
            miniCube.dataset.rotY = 0;
            miniCube.dataset.prevTransform = "";
            miniCube.style.transform = "translateZ(" + z*100 +"px)";
            miniCube.style.left = (x*100) + "px";
            miniCube.style.top = (y*100) + "px";

            rubiksCube.appendChild(miniCube);
            id++;
        }
        
    }
}
}
