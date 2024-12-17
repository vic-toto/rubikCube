const colors = {
    top: "#98FF98",      // Mint Green
    bottom: "#D8B6FF",   // Lilac
    left: "#FFB6C1",     // Baby Pink
    right: "#FFCC99",    // Pastel Orange
    front: "#ADD8E6",    // Light Blue
    back: "#FFFFE0",     // Light Yellow
};

function setCubeColors() {
    const cube = document.querySelector('.rubiks-cube');

    // Front face
    document.querySelectorAll('.face.front .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("front")) {
            miniCube.style.backgroundColor = colors.front;
        }
    });

    // Back face
    document.querySelectorAll('.face.back .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("back")) {
            miniCube.style.backgroundColor = colors.back;
        }
    });

    // Left face
    document.querySelectorAll('.face.left .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("left")) {
            miniCube.style.backgroundColor = colors.left;
        }
    });

    // Right face
    document.querySelectorAll('.face.right .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("right")) {
            miniCube.style.backgroundColor = colors.right;
        }
    });

    // Top face
    document.querySelectorAll('.face.top .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("top")) {
            miniCube.style.backgroundColor = colors.top;
        }
    });

    // Bottom face
    document.querySelectorAll('.face.bottom .mini-cube').forEach((miniCube) => {
        let id = miniCube.id;
        if (id.includes("bottom")) {
            miniCube.style.backgroundColor = colors.bottom;
        }
    });
}

// Call the function when the page loads
window.onload = setCubeColors;

