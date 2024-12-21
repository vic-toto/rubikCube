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

// Select the front face
const frontFace = document.querySelector('.front');
// Create the mini-cube
const miniCube = document.createElement('div');
miniCube.classList.add('mini-cube');

// Define transformations for each face of the mini-cube
const miniCubeFaces = [
    { class: 'mini-cube-face front', color: 'red', transform: 'translateZ(50px)' },
    { class: 'mini-cube-face back', color: 'blue', transform: 'rotateY(180deg) translateZ(50px)' },
    { class: 'mini-cube-face top', color: 'yellow', transform: 'rotateX(90deg) translateZ(50px)' },
    { class: 'mini-cube-face bottom', color: 'white', transform: 'rotateX(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face left', color: 'green', transform: 'rotateY(-90deg) translateZ(50px)' },
    { class: 'mini-cube-face right', color: 'orange', transform: 'rotateY(90deg) translateZ(50px)' },
];

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
// Add the mini-cube to the front face
miniCube.style.transform = 'translate(0px, 0px) translateZ(100px)';

rubiksCube.appendChild(miniCube);
