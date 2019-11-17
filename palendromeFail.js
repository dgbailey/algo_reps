//off by 1 errors

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s,start=0,subs=[]) {
    //break problem down
    //for each letter of string
    //two window decisions
    //start index
    //hash map to save string indices
    
  
    
    
    if(start === s.length){
        return;
    }
    
    for(let end = start; end < s.length; end ++){
        
        if(isPal(start,end,s)){
            
            subs.push(1);
            console.log('pal found',start,end,s,subs)
           countSubstrings(s,end +1,subs);
            
        }
         
        console.log('pal NOT found',start,end,s,subs)
        
        
        
    }
    
    return subs.length;
    
    
    
    function isPal(l,r,s){
        while (l < r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--
        }
        return true;
    }
};