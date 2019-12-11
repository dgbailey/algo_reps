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