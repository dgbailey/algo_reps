//you weren't associating existing vertex values in ref with new neighbor copies
//dfs doesn't always require a stack

var cloneGraph = function(node) {
    if (!node) return node;
    
    const ref = {};
    const copy = new Node(node.val, []);
    
    ref[node.val] = copy;
    dfs(node, ref);
    return copy;
};

var dfs = function(node, ref) {
    for (neighbor of node.neighbors) {
        if (!ref[neighbor.val]) {
            const copy = new Node(neighbor.val, []);
            ref[neighbor.val] = copy;
            ref[node.val].neighbors.push(copy);
            dfs(neighbor, ref)
        } else {
            ref[node.val].neighbors.push(ref[neighbor.val])
        }
    }
}

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
var cloneGraph = function(node) {
    
    if(!node){
        return node;
    }
    
    let refCopies = {};
    let copy = new Node(node.val,[]);
    refCopies[copy.val] = copy;
    deepHelper(node,refCopies);
    return copy;
    

    
    function deepHelper(node,reference){
        for(let n of node.neighbors){
            if(!reference[n.val]){
            
                reference[n.val] = new Node(n.val,[]);
            //add to ref
            //create copy for neighbors
            
                
                deepHelper(n,reference);
            }
        
            //call deepHelp on new neighbor
            
        
        else{
            //add reference to current neighbors array
            reference[node.val].neighbors.push(reference[n.val]);
        }
        }
        
    }
        
       
    
    
};