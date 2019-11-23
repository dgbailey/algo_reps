/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    return check(root);
    
    function check(root,min=-Infinity,max=Infinity){
        
        if(!root){
            return true;
        }
        
        if(root.val <= min || root.val >= max ){
            return false;
        }
        
    
        
        return check(root.left,min,root.val) && check(root.right,root.val,max)
    }
};