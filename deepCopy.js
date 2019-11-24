/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

 //difficult part here was remembering to return the copy, remembering when to dfs (non visited nodes), that we didn't need a base case
 
var cloneGraph = function(node) {
    //some container for our node copies
    let visited = {};
    let copy = new Node(node.val,[]);
    visited[node.val] = copy;
    dfs(node);
    return copy;
    //traverse the graph
     //for each vertex dfs on neighbors
    //
    function dfs(n){
        //base case?
   
        
        //iterate through neighbors
        //if we have seen and copied neighbor 
        //push that neighbor reference into the current vertex neighbor array
        //no need to dfs in this case as we have already explored that neighbor
        for(let v of n.neighbors){
            if(v.val in visited){
                visited[n.val].neighbors.push(visited[v.val]);
                
               
            }
            else{
                let copy = new Node(v.val,[]);
                visited[v.val] = copy;
                //push neighbor into neighbors array of current node
                visited[n.val].neighbors.push(copy);
                //here dfs the unexplored vertex
                dfs(v);
                
            }
            
            
        }
        
    }
    

    
};