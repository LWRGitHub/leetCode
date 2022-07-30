// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

    // Input: grid = [
    //   ["1","1","1","1","0"],
    //   ["1","1","0","1","0"],
    //   ["1","1","0","0","0"],
    //   ["0","0","0","0","0"]
    // ]
    // Output: 1


// Example 2:

    // Input: grid = [
    //   ["1","1","0","0","0"],
    //   ["1","1","0","0","0"],
    //   ["0","0","1","0","0"],
    //   ["0","0","0","1","1"]
    // ]
    // Output: 3
 

// Constraints:

    // m == grid.length
    // n == grid[i].length
    // 1 <= m, n <= 300
    // grid[i][j] is '0' or '1'.


// LeetCode (2022) Number of Islands: https://leetcode.com/problems/number-of-islands/


const numIslands = (grid) => {
    const [m,n] = [grid.length, grid[0].length];
    const dfs = (i, j) => {
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;
        grid[i][j] = "0";
        dfs(i-1, j);
        dfs(i+1, j);
        dfs(i, j-1);
        dfs(i, j+1);
    }
    let count = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === "1"){
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
};

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
  
const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
  
console.log(numIslands(grid1)) //1
console.log(numIslands(grid2)) //3