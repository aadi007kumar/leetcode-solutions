/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let left = 0, right = people.length-1;
    let count=0;
    while(left<=right){
        if(people[left]+people[right]===limit){
            count++
            left++
            right--
        }else if(people[left]+people[right]>limit){
            count++
            right--
        }else{
            count++
            left++
            right--
        }
    }
    return count;
};