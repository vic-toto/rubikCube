To do: 

- Set background and create cube ✅
- figure out how to make each section of the cube rotate up, down, left and right (have to split the cube into sections one way or another)

- code main cube movements per section

- add actions 
    1. if you click screen off cube, you can rotate with mouse until you click again ✅
    2. if you click on the cube, nothing happens ✅
    3- if you click and drag left, right, up or down the cube section rotates

    4. add button "shuffle" and "solve"✅
    5. display result 

- figure out how to solve the cube in less than 20 moves

Ok lets think about this for a second. 
The cube will have pieces and not all of them have the same number of colored faces. 
So the cube has a total of 6 faces and 9 squares per face, for a total of 54 pieces made of 26 little cubes: 
- 8 mini cubes are corners and have 3 colored sides, so they take 24 of the total pieces;
- 12 mini cubes are centers of the side, right under or next to each corner, and they have 2 colored sides, so they take up another 24 of the squares. 
- the remaining 6 have only one color

ok so, there will be a "corner mini cube" with 3 colors, a "border mini cube" with 2 colors and a "center mini cube" with 1 color. 
Colors are assigned at the start based on the face you start on. 

