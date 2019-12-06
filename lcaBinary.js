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
    
    
    //bst may offer certain helpful constraints
    //nodes can be descendants of themselves
    //all node values unique given BST
    
    //graph search
    //create graph with dfs of BST  O(V + E)
    //{6:[2,8],2:[0,4],0:[],4:[3,5],8:[7,9]}
    //if we find the node in one of the child arrays we know that is LCA
    //check if one is a descendant of the other..this is our easy case
    
    //if one node isn't a descendant of the other
        //they must be on opposite sides of a tree
            //if they are on opposite sides of tree the root is the LCA
    
    //if both bfs come up false, return root
    //otherwise return which bfs comes up true
    
    //search for value, document path
    //search for value, document path
    //compare paths, return last matched number, this will be LCA
    //e.g. [6,2], [6,8] last matched num is 6
    //two log(n) searches
    //two O(logn) space arrays
    //one o(n) simultaneous traversal


    //recursive here is more elegant
    //if your search values are both LT or GT the root, repeat search with appropriate node
    //otherwise return root
    //this works out

    let nums = searchBST(root,p.val);
    let nums2 = searchBST(root,q.val);
    let sol = lca(nums,nums2);
    return sol;
    
    function searchBST(root,value,path =[]){
        
        if(root.val === value){
            path.push(root);
            return path;
        }
       
        
        else{
            if(value > root.val){
                path.push(root);
                searchBST(root.right,value,path);
            }
            else{
                path.push(root);
                searchBST(root.left,value,path);
            }
        }
        
        return path;//no matches
    }
    function lca(arr1,arr2){
        let p1 = 0;
        let p2 = 0;
        let solution = root.val;
        
        while(p1 < arr1.length && p2 < arr2.length){
            if(arr1[p1].val === arr2[p2].val){
                solution = arr1[p1];
                p1++;
                p2++;
            }
            else{
                return solution;
            }
        }
        return solution;
    }
    

};