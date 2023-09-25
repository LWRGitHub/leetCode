/*
    Min Cost to Connect All Points


    You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

    The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

    Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

    

    Example 1:


    Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    Output: 20
    Explanation: 

    We can connect the points as shown above to get the minimum cost of 20.
    Notice that there is a unique path between every pair of points.
    Example 2:

    Input: points = [[3,12],[-2,5],[-4,1]]
    Output: 18
    

    Constraints:

    1 <= points.length <= 1000
    -10^6 <= xi, yi <= 10^6
    All pairs (xi, yi) are distinct.


    LeetCode (2023) Min Cost to Connect All Points: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
*/


const minCostConnectPoints = (points) =>{
    
    const dist = [];
    // keeps track of nodes; used latter to turns to 0/(or lowest node at time) when lowes cost found
    const nodes = [...Array(points.length)].map((_, i) => i);
    let lowestCost = 0;
    
    // Get all posible connection points/cost
    for(let i=0; i<points.length; i++) {
        for(let j=i+1; j<points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            dist.push([cost, i, j]);
        }
    }
    // sort cost
    dist.sort((a, b) => a[0] - b[0]);
    
    // marks node as looked at if not 1st time
    function find(n) {
        if(nodes[n] === n) return n;
        // turns node to 0/(or lowest node at time)
        nodes[n] = find(nodes[n]);
        return nodes[n];
    }
    
    let count = 0;
    // loops through sorted dist; and adds lowes cost to lowestCost
    for(let [d, n1, v1] of dist) {
        const node1 = find(n1);//0
        const node2 = find(v1);//3
        if(node2 === node1) continue;
        // turns node to 0/(or lowest node at time)/ marks node as looked by seting to 0/lower number
        nodes[node2] = node1
        lowestCost += d;
    }
    return lowestCost;
};







