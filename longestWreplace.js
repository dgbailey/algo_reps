var characterReplacement = function(s, k) {
    // two pointer always gives us length of window
    //within that window we need to know how many repeating characters
    //do we have more than k repeating characters?
    let d = {};
    let start = 0;
 
    let longest = 0;
    let repeat = 0;
    //a
    for(let end = 0; end < s.length; end ++){
        
        d[s[end]] = d[s[end]] || 0;
        d[s[end]]++
        
         repeat = Math.max(repeat, d[s[end]]);
        
     
            if((end - start + 1) - repeat > k){
               
                d[s[start]] --;
                 start++;
            }
            
           
            //shorten window by incrementing start
            //reduce count
    
        
         longest = Math.max(longest,(end - start +1))
 
        
        
    
      
         
    }

    return longest
}