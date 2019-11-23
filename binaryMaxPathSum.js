/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    //root case
    //things to consider, positive and negative sums
    //sum of current sub tree
    //sum of left or right tail
    
    let max = -Infinity;
    dfs(root);
    return max;
    
    function dfs(root){
        
        if(!root){
            return 0;
         }
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        
        max = Math.max(max,root.val + left + right);
        
        return Math.max(0,root.val + left, root.val + right);
        
    
        
    }
  
    
    
    
    return Math.max(...sums);
    
    
};