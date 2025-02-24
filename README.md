👋🏻 Welcome to Rubik 

This is a 42 project with the goal of solving any given rubik's cube in 20 moves or less, in less than x seconds. 
I wanted to make it a bit more challenging for myself, so there's also a front-end visualisation to the project

🧊 What you can do 

- When you start the program, you will see the cube and 3 buttons 
- If you press the screen (not on the cube), keep your moused press and move aroun, you can rotate the cube
- If you drag pieces of the cube, you will rotate the faces (WIP)
- You can also move the cube with the keyboard. At the moment you can 

        f (front cockwise), m (middle clockwise), b(back clockwisse), 
        u (up clockwise), C (center clockwise), d (down clockwise), 
        l (left counter-clockwise), c (vertical center counter-clockwise), r (right counter-clockwise) 
        other moves are WIP 

- If you press ctrl+Z, you will undo your last move. This is limited to one move anullment. 
- The code is applicable to any cube of any size, you can modify the size currently hardcoding cubeSize in the createCube.js file


You will find comments in the code to explain things and I'll add some documentation here on the project


Messy notes below, will be refactored, need to store my stream of consciusness 👇🏽

To do: 

- Set background and create cube ✅
- figure out how to make each section of the cube rotate up, down, left and right (have to split the cube into sections one way or another) ✅
- code main cube movements per section ✅
- add actions 
    1.- if you click and drag left, right, up or down the cube section rotates
    2. add button "shuffle" and "solve"✅
    3. display result 

- figure out how to solve the cube in less than 20 moves