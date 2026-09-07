/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b);
    let left = 0,right=left+1;
    while(right<nums.length){
        if(nums[left]===nums[right]) return true
        else{
            left++
            right++
        }
    }
    
    return false
};