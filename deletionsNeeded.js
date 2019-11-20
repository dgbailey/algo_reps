/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    //find min number of intervals you need to remove to make the rest non overlapping
    if(intervals.length === 0){
        return 0;
    }
    //sorting
    let nonOverlaps = 1;
    
    let sortedInts = intervals.sort(([a,b],[c,d]) =>{
        
        return b - d || a -c ;
        
    })

    let end = sortedInts[0][1];
        
    console.log(sortedInts)
    for(let i = 1; i < sortedInts.length;i++){
       
       
        if(end <= sortedInts[i][0]){
            
            nonOverlaps++
            end = sortedInts[i][1]
            
        }
    }
    
    return intervals.length - nonOverlaps;
                                    
};

//here focusing on non overlaps was the key to unlocking after sorting/we know that once we find a non overlap we can move on. Mostly becuase 
//we have sorted interval endpoints in ascending order.