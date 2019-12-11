/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    let hash = {};
     
     for(let i = 0 ; i < nums.length; i ++){
         if(nums[i] in hash){
             return [hash[nums[i]],i];
         }
        else{
            hash[target - nums[i]] = i;
        }
     }
 
         
     
 };

 //array is not presorted, only one solution, immediate return