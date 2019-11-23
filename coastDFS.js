/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    //DFS?
    //document visited nodes
    //document goal reached
    //first goal recures path to atlantic
    //second goal recurse path to pacific
    //return coords if each successful
    let record = [];
    
    for(let i = 0; i < matrix.length; i ++){
        
        for(j = 0; j < matrix.length; j ++){
            
           
            let v = [i,j];
           
           
            let visited = {};
            let visitedp = {};
      
            //coasts
            let atlantic = [0,0]
            let pacific = [matrix[0].length -1,matrix.length -1]
            
            //dfs in toward each coast
            let a = dfsCoast(v,visited,atlantic);
            console.log(
                'a,p',a
            )
            let p = dfsCoast(v,visitedp,pacific);
            console.log(
                'a,p',a,p
            )
            
            //if both searches successful
            if(a && p){
                record.push(v);
                console.log('HIT',v)
            }
           
          
            
            
        }
    }
    
    return record;
    
    
    //so for every node 
    //
    function dfsCoast(v,visited,coast){
        console.log('start')
        console.log('coast',coast,v)
        let vr = v[0];
        let vc = v[1];
        let neighbors = [[vr,vc +1] ,[vr,vc - 1],[vr +1,vc],[vr -1,vc]];
        
      
        
        if(v[0] === coast[0] || v[1] === coast[1]){
            console.log('coastmatch1',[[coast[0]],coast[1]])
            return true;
        }
        
        //here neighbors list functions as our stack
        
        while(neighbors.length > 0){
          console.log(neighbors);
          console.log(visited);
            //set up 'stack'
            //judge nodes for atlantic
            let last = neighbors.pop();
            let [row,col] = last;
            
            //check if we have visited  neighbor
             if(`${last[0]}`.concat(`${last[1]}`) in visited){
                
            }
            
            else if( row < 0 || row > matrix.length -1 || col < 0 || col > matrix[0].length -1){
                //out of bounds continue to next neighbor
               
                
            }
            //is current vertex gte neighbor
            else if(matrix[v[0]][v[1]] >= matrix[row][col] ){
               
                if(col === coast[1] || row === coast[0]){
                    //if we are at the atlantic
                    console.log('coastmatch',[row,col],[[coast[0]],coast[1]])
                    return true;
                
                }
                else{
                //add current vertex to visited
                visited[`${last[0]}`.concat(`${last[1]}`)] = true;
              
                //recurse on acceptable neighbor
                dfsCoast(last,visited,coast);
                }
               
              
                
            }
            else{
                visited[`${last[0]}`.concat(`${last[1]}`)] = true;
              
          
            }
      
        }

    }
      
 
      
        
        
       
   
};
let m = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];

console.log(pacificAtlantic(m));