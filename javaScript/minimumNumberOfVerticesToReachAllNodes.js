/*
    Minimum Number of Vertices to Reach All Nodes


    Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

    Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

    Notice that you can return the vertices in any order.

    

    Example 1:



    Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
    Output: [0,3]
    Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].
    Example 2:



    Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
    Output: [0,2,3]
    Explanation: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.
    

    Constraints:

    2 <= n <= 10^5
    1 <= edges.length <= min(10^5, n * (n - 1) / 2)
    edges[i].length == 2
    0 <= fromi, toi < n
    All pairs (fromi, toi) are distinct.


    LeetCode (2023) Minimum Number of Vertices to Reach All Nodes: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// const findSmallestSetOfVertices = (n, edges) =>{
//     const adjacencyList = {};
    
//     for(let i=0; i<edges.length; i++){
        
//         if(!(edges[i][0] in adjacencyList)){
//             adjacencyList[edges[i][0]] = [];
//         }
//         adjacencyList[edges[i][0]].push(edges[i][1]);
//     }
    
//     let nodes = new Set();
//     for(let i=0; i<n; i++){
//         nodes.add(i);
//     }
    
//     for(let key in adjacencyList){
        
//         for(let i=0; i<adjacencyList[key].length; i++){
//             if(nodes.has(adjacencyList[key][i])){
//                 nodes.delete(adjacencyList[key][i]);
//             }
//         }
//     }
    
//     return Array.from(nodes);
// };

const findSmallestSetOfVertices = (n, edges) =>{
    // index = node; value = how many nodes point to that node
    const pointCount = Array(n).fill(0);
    const answer = [];
    // find how many nodes point to each node
    edges.forEach(([from, to]) => pointCount[to]++);
    // add nodes to answer array that have 0 nodes pointing to it
    pointCount.forEach((deg, i) => !deg && answer.push(i));
    return answer;
};
