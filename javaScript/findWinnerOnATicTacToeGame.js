// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

    // Players take turns placing characters into empty squares ' '.
    // The first player A always places 'X' characters, while the second player B always places 'O' characters.
    // 'X' and 'O' characters are always placed into empty squares, never on filled ones.
    // The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
    // The game also ends if all squares are non-empty.
    // No more moves can be played if the game is over.


// Given a 2D integer array moves where moves[i] = [row[i], col[i]] indicates that the i^th move will be played on grid[row[i]][col[i]]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

 

// Example 1:

    // [
    //     ["X"," "," "],
    //     [" ","X"," "],
    //     ["O","O","X"]
    // ]

    // Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
    // Output: "A"
    // Explanation: A wins, they always play first.


// Example 2:

    // [
    //     ["X","X","O"],
    //     ["X","O"," "],
    //     ["O"," "," "]
    // ]

    // Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
    // Output: "B"
    // Explanation: B wins.


// Example 3:

    // [
    //     ["X","X","O"],
    //     ["O","O","X"],
    //     ["X","O","X"]
    // ]

    // Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
    // Output: "Draw"
    // Explanation: The game ends in a draw since there are no moves to make.
 

// Constraints:

    // 1 <= moves.length <= 9
    // moves[i].length == 2
    // 0 <= row[i], col[i] <= 2
    // There are no repeated elements on moves.
    // moves follow the rules of tic tac toe.



const tictactoe = (moves, g=Array.apply(null,Array(3)).map(i=>Array(0,0,0))) =>{
    moves.forEach((t,i) => g[t[0]][t[1]] = i & 1 ? 'B' : 'A');
    for(let i=0; i<3; i++){ 
        if(g[i][0] && g[i][0]===g[i][1] && g[i][1]===g[i][2]) return g[i][0] 
    };
    for(let i=0; i<3; i++){ 
        if(g[0][i] && g[0][i]===g[1][i] && g[1][i]===g[2][i]) return g[0][i] 
    };
    if(g[0][0] && g[0][0]===g[1][1] && g[1][1]===g[2][2] || g[0][2] && g[0][2]===g[1][1] && g[1][1]===g[2][0]) return g[1][1];
    if(moves.length < 9) return 'Pending';
    return 'Draw';
};