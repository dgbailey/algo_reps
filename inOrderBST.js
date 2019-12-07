/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    //dfs to collect values O(n)
    //sort array and access [5,4,3,2,1] array length - k = index O(nlogn)
    
    //How does bst impact decisions
    //duplicates are not allowed
    //traversal style could be helpful
    //in order traversal of BST gives us elements in ascending order

    //**struggled with a dfs inorder traversal of this tree. Was trying this later in the day */
    /*
    
    https://www.quora.com/How-did-preorder-inorder-and-postorder-binary-tree-traversals-get-their-names
    
    */

    //1 2 null 3 4 5 6
    //1 2 3 4
    let nums = [];
    findSmallest(root);
    console.log(nums)
    return nums[k -1];
   
   
    
    function findSmallest(root){
        //returns smallest node in BST
      
        
        
        if(!root){
            return;
        }
        
        findSmallest(root.left)
         nums.push(root.val);
        findSmallest(root.right)
       
       
       
        
    }
    
};