 
document.addEventListener('keydown', (event) => {
    if (event.key === 'f')
        rotateFace('z', 2, 1);
    if (event.key === 'F')
        rotateFace('z', 2, -1);
    else if (event.key === 'm')
        rotateFace('z', 1, -1);
    else if (event.key === 'b')
        rotateFace('z', 0, -1);
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
