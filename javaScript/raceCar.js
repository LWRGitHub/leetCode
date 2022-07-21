// Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse):

    // When you get an instruction 'A', your car does the following:
        // position += speed
        // speed *= 2
    // When you get an instruction 'R', your car does the following:
        // If your speed is positive then speed = -1
        // otherwise speed = 1
    // Your position stays the same.


// For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.

// Given a target position target, return the length of the shortest sequence of instructions to get there.


// Example 1:

    // Input: target = 3
    // Output: 2
    // Explanation: 
    // The shortest instruction sequence is "AA".
    // Your position goes from 0 --> 1 --> 3.


// Example 2:

    // Input: target = 6
    // Output: 5
    // Explanation: 
    // The shortest instruction sequence is "AAARA".
    // Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.
 

// Constraints:

    // 1 <= target <= 10^4   


// LeetCode(2022) Race Car: https://leetcode.com/problems/race-car/




const racecar = (t) => {
    let q = [{n: 0, p: 0, s: 1}];
    let best = Infinity;
    
    while(q.length){
        const {n,p,s} = q.pop();
        
        if(p == t) best = Math.min(best, n);
        if(n >= best) continue;
        
        q.push({n: n+1, p: p+s, s: s*2});
        if(p+s>t && s>0 || p+s<t && s<0) q.push({n: n+1, p, s: -1*s/Math.abs(s)});
    }
    return best
};



