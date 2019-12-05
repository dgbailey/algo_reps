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
    //consider recurison and base case
    //important lesson here was base cases in binary trees.  Recursion into binary trees and sub trees.
    //Thinking about what you are returning at each node of a binary tree.  What does this return value represent? 
    //1) The potential greatest current left path sum
    //2) The potential greatest current right path sum
    //3) The potential greates sub tree sum
    //4) At this point you have accounted for all sums in one sub tree, in doing so you have accounted for all possible sums in the BT.
    //5) Now you must return the greatest of the two r & l sums
    /* A
      / \
      B  C

      A + B, A + C, A + B + C

      */
    
    let max = -Infinity;
    dfs(root);
    return max;
    
    function dfs(r){
        //let's recurse until we hit a null
        //once we hit null what do we have?
        //we have the last leg of a tree (left and right)
        //we have the sub tree itself
        //what to do with negative numbers?
        
        if(!r){
            return 0;
        } 
        //recurse left and right until you reach null values
        let left = dfs(r.left);
        let right = dfs(r.right);
        
        //evaluate current sub tree max
        max = Math.max(max,r.val + left + right)
        //we want to return the greates sum path l or r to the next sub tree
        //if they are both negative we return zero
        return Math.max(0,r.val + left,r.val + right);
        
    }
   
    
    
    
    
};