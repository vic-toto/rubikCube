// Select the rubiks cube container
const rubiksCube = document.querySelector('.rubiks-cube');
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
    // face.innerHTML = `<span class="face-name">${faceName}</span>`;
    rubiksCube.appendChild(face);
});

let i = 0;

for (let z = 0; z < 3 ; z++) {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            // Create the mini-cube
            const miniCube = document.createElement('div');
            miniCube.classList.add('mini-cube');
            // Create and append each face to the mini-cube
            miniCube.dataset.miniCubeId = i;
            miniCubeFaces.forEach(faceData => {
                const face = document.createElement('div');
                face.className = faceData.class;
                face.style.backgroundColor = faceData.color;
                face.style.transform = faceData.transform;
                face.innerHTML = miniCube.dataset.miniCubeId;
                miniCube.appendChild(face);
            });
            // setting cube from top left to bottom right
            miniCube.dataset.position = [x, y, z];
            miniCube.dataset.position0 = [x, y, z];
            miniCube.dataset.rotZ = 0;
            miniCube.dataset.rotX = 0;
            miniCube.dataset.rotY = 0;

            miniCube.style.transform = "translateZ(" + z*100 +"px)";
            miniCube.style.left = (x*100) + "px"; //manages position on x axs
            miniCube.style.top = (y*100) + "px"; //manages position on y axis
            // miniCube.style.origin = "center center";

            rubiksCube.appendChild(miniCube);
            i++;
        }
    }
}