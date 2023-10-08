/*

    Course Schedule


    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    

    Example 1:

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0. So it is possible.
    Example 2:

    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
    

    Constraints:

    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.

            

    LeetCode (2023) Course Schedule: https://leetcode.com/problems/course-schedule/description/

*/


// create the adjacency list
const buildAdjacencyList = (totalNodes, graph) =>{
    // makes >>> obj = {key: [], ...}
    const adjacencyList = Array.from({length: totalNodes}, () => []);

    // Loop through the graph grabbing the node in the adjacent node
    for(let [node, adjacentNode] of graph){
        // push the node and it's adjacent node into the adjacency list
        adjacencyList[node].push(adjacentNode);
    };

    // return adjacency list
    return adjacencyList;
};

// check for a cycle
const hasCycle = (node, adjacencyList, visited, departedCount) =>{
    // Mark the nude as visited
    visited[node] = true;

    // loop through the node adjacent nodes
    for(const adjacent of adjacencyList[node]){
        if(!visited[adjacent]){ // if not visited
            visited[adjacent] = true; // mark as visited
            // if has cycle return true
            if(hasCycle(adjacent, adjacencyList, visited, departedCount)) return true;
        }else{
            // Else if departed count equals zero return true
            if(departedCount[adjacent] === 0) return true;
        }
    }

    // if you get here we're departing and we can return false as there is no cycle
    departedCount[node]++;
    return false;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) =>{
    // adjacencyList = {node: [<adjacentNode>, ...], ...}
    const adjacencyList = buildAdjacencyList(numCourses, prerequisites);
    const visited = {};
    // departedCount = {node: 0, ...}
    const departedCount = Array.from({length: numCourses}, () => 0);

    // loop through nodes in adjacency list
    for(let node in adjacencyList){
        if(!visited[node]){ // if not visited and has cycle return false
            if(hasCycle(node, adjacencyList, visited, departedCount)) return false; 
        };     
    }; 

    return true;      
};
