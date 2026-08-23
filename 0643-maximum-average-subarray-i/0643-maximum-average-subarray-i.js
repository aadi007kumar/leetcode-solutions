/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0

    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let avg=sum/k
    let maxAvg=avg
    
    for(let j=k;j<nums.length;j++){
        sum=sum+nums[j]
        sum=sum-nums[j-k]
        let maximumAvg=sum/k
        maxAvg = Math.max(maxAvg,maximumAvg)

    }
    return maxAvg

};