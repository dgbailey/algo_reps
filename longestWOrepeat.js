/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 
    //loop through string
    //two pointers
    //some type of storage to know when to increment first pointer
    //reset pointer if dict index GTE current start pointer position
    //always reset dict index value when dupe is encountered
    //the ability to reset storage
    //assess longest vs stored max
    //return longest
    
    let start = 0;
    let end = 0;
    let d = {};
    let longest = 0;
    
    while( end < s.length){
        
        if(s[end] in d){
           if(d[s[end]] >= start){
               start = d[s[end]] + 1;
                
           }    
            
              d[s[end]] = end;
          
            
            
               
            
            
            
        }
        else{
            d[s[end]] = end;
            
           
           
           
        }
        longest = Math.max(longest, (end - start) +1);
        
          end++;
    }
    
    return longest;
};