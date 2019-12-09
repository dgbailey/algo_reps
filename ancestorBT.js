/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    return dfs(root);
   
    
   //dfs
        //if val matches p or q what do we do?
            //check status of other flags
            //if we have 2 of 3 we can return nodeflag
        //if node is null what do we do
        //search left
        //search right
    //if any ancestor node receives two true flags we return that ancestor
    function dfs(node){
        
        let nodeFlag = null;
        
        
        if(!node){
            return null;
        }
        if(node.val === p.val){
           
            nodeFlag = true;
            
        }
        if(node.val === q.val){
       
            nodeFlag = true;
        }
       
         
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        
        if(nodeFlag){
            if(left || right){
               return node;
            }
         
        }
        
        else if(left || right){
            if(left && right){
                return node
            }
            else return left? left:right;//otherwise we are returning a nodeFlagged part of the tree (meaning an ancestor that is its own LCA)
        }
        return nodeFlag;
        
    }
};