/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    //use inorder to limit recursion depth;
    if(!preorder){
        return;
    }
    if(preorder.length === 0){
        return;
    }
    let root = preorder ? new TreeNode(preorder.shift()):[];
    console.log(root.val)
    if(root.val === inorder[0]){
        inorder.shift();
        return root;
    }
    
   
    
    root.left =  buildTree(preorder,inorder);

    if(root.val === inorder[0]){
            inorder.shift();
            console.log(inorder)
            console.log(preorder)
       
           
        }
     
    root.right =  buildTree(preorder,inorder);
        
    
        //form root
        //assign left and right
        //return root

    
    return buildTree();
};