/*

    Find Median from Data Stream


    The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

    For example, for arr = [2,3,4], the median is 3.
    For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
    Implement the MedianFinder class:

    MedianFinder() initializes the MedianFinder object.
    void addNum(int num) adds the integer num from the data stream to the data structure.
    double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
    

    Example 1:

    Input
    ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
    [[], [1], [2], [], [3], []]
    Output
    [null, null, null, 1.5, null, 2.0]

    Explanation
    MedianFinder medianFinder = new MedianFinder();
    medianFinder.addNum(1);    // arr = [1]
    medianFinder.addNum(2);    // arr = [1, 2]
    medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
    medianFinder.addNum(3);    // arr[1, 2, 3]
    medianFinder.findMedian(); // return 2.0
    

    Constraints:

    -10^5 <= num <= 1^05
    There will be at least one element in the data structure before calling findMedian.
    At most 5 * 10^4 calls will be made to addNum and findMedian.
    

    Follow up:

    If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
    If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

            

    LeetCode (2023) Find Median from Data Stream: https://leetcode.com/problems/find-median-from-data-stream/description/ 

*/

// import {
//     PriorityQueue,
//     MinPriorityQueue,
//     MaxPriorityQueue,
//     ICompare,
//     IGetCompareValue,
// } from '@datastructures-js/priority-queue';

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');


var MedianFinder = function() {

    this.maxHeap = new MaxPriorityQueue();
    this.minHeap = new MinPriorityQueue();
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() === 0 || num < this.maxHeap.front().element){
        this.maxHeap.enqueue(num);
    }else{
        this.minHeap.enqueue(num);
    };

    if(this.maxHeap.size() - this.minHeap.size() > 1){
        this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }else if(this.minHeap.size() - this.maxHeap.size()> 1){
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
   
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size() > this.minHeap.size()){
        return this.maxHeap.front().element;
    }else if(this.minHeap.size() > this.maxHeap.size()){
        return this.minHeap.front().element;
    }else{
        return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

  

