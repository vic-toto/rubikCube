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


casi rotx roty rotz
0 0 0 
0 0 1
0 1 0
0 1 1 
1 1 1 
1 1 0
1 0 1
1 0 0 
0 1 0


The idea is to structure the interaction between these axes and their rotations in a modular way, similar to how calculateRotation works, where you abstract each rotation logic based on the axis in question.

Normalization: Start by normalizing resX, resY, and resZ. This is important to ensure that the rotations behave consistently. You’re already doing this with the (rotX / 90) logic and applying the modulo to fit it within a 360-degree rotation cycle.

Handle Axis by Axis: After normalization, you should break the logic down by axis. For example, when rotating along the X-axis, the other axes might be affected differently depending on whether the mini-cube has already been rotated 90°, 180°, or 270°.

Interaction Based on ResX and ResY:

If resX or resY is 1 (meaning 90 or 270 degrees): This indicates that the mini-cube's axes have shifted significantly and further rotations should adjust the other axes accordingly. For example, a Z-rotation might need to account for the fact that the X-axis is now in a different orientation.
If resX or resY is 2 (meaning 180 degrees): The behavior may be more predictable, as the mini-cube has been rotated halfway around its axis. This might simplify the subsequent rotations because its local axes should still be aligned in a simple way.
If resX or resY is 3 (270 degrees): Again, this affects how the axes should behave, and you may need to reverse some rotations to compensate for the 270-degree turn.