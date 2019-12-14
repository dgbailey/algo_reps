/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let solSet = [];
    
   nums.sort((a,b) => a - b);
    
    
    for(let i = 0; i < nums.length -1;i++){
        let j = i +1;
        let k = nums.length -1;
       
          // [-1,-1,-1,-1,2,2]
          //for each match we need to find the next unique value for each pointer? and i in order to calculate next window for inspection
          //the important thing to remember here is that whenever we match with zero, any increase in j necessitates a decease in k.  This
          //is due to the fact that our array is presorted.
          //
             while(j < k){
                 
                if(nums[i] + nums[j] + nums[k] === 0){
                solSet.push([nums[i], nums[j], nums[k]]);
                
                
                while(j < k && nums[j] === nums[j + 1]){
                    j++;
                
                }
                    j++
                   
                while(j < k && nums[k] === nums[k-1]){
                    k--;
                }
                    k--
                    
            }
               
            
            else if(nums[i] + nums[j] + nums[k] > 0){
                k--;
            }
           else if(nums[i] + nums[j] + nums[k] < 0){
                j++;
            }
                 
        while(i < nums.length - 1 && nums[i] == nums[i+1]) {
            i++;
        }
        
                 
         }
        
        
    

        
        
    }
    return solSet;
    };