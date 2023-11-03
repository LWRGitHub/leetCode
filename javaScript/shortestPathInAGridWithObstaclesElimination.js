/*
    Shortest Path in a Grid with Obstacles Elimination

    You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

    Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

    

    Example 1:


    Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
    Output: 6
    Explanation: 
    The shortest path without eliminating any obstacle is 10.
    The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
    Example 2:


    Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
    Output: -1
    Explanation: We need to eliminate at least two obstacles to find such a walk.
    

    Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 40
    1 <= k <= m * n
    grid[i][j] is either 0 or 1.
    grid[0][0] == grid[m - 1][n - 1] == 0


    LeetCode (2023) Shortest Path in a Grid with Obstacles Elimination: https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/description/

*/


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

const shortestPath = function(grid, k) {
    const q = [ [0, 0, k, 0] ];
    const seen = new Set();

    while(q.length > 0){
        let [row,col,brakes,steps] = q.shift(); 

        const pos = row + ',' + col + ',' + brakes; 
        if(seen.has(pos)) continue; 
        seen.add(pos); 

        if(row === grid.length-1 && col === grid[0].length-1) return steps;

        if(grid[row][col] === 1){
            if(brakes > 0){
                brakes--;
            }else{
                continue;
            }
        } 

        if(row > 0) q.push([row-1,col,brakes,steps+1]);
        if(row < grid.length-1) q.push([row+1,col,brakes,steps+1]);
        if(col > 0) q.push([row,col-1,brakes,steps+1]);
        if(col < grid[0].length-1) q.push([row,col+1,brakes,steps+1]);
    }
    
    return -1;
};
