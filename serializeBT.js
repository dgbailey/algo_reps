/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */


var serialize = function(root) {
    //recursive traversal won't give us correct order
    if(!root){
        return root;
    }
    //bf traversal?
    let serialized =[];
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        if(queue[0]){
            serialized.push(queue[0].val);
           
            queue.push(queue[0].left);
            queue.push(queue[0].right);
        }
        else{
            serialized.push(null);
        }
        
        queue.shift();//O(n)
   
        
       
        //[1] 2,3
        //[1,2] 3,null,null
        //[1,2,3] null, null,4,5
        //[1,2,3,null]
    }
    
    for(let i = serialized.length -1; i > 0; i --){
        if(serialized[i] === null){
            serialized.pop();
        }
        else{
            break;
        }
    }
    console.log(serialized);
    return JSON.stringify(serialized);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    if(!data){
       return data;
       }
    let queue = [];
    let parsed = JSON.parse(data)
    let root = new TreeNode(parsed[0]);
    queue.push(root);
    
    for(let i = 0; i < parsed.length; i ++){
        
    
        if(queue.length > 0){
             queueRoot = queue.shift();
            if(parsed[2*i +1] ||parsed[2*i +1] === 0){
                queueRoot.left = new TreeNode(parsed[2*i +1]);
                 queue.push(queueRoot.left);
            }
            if(parsed[2*i+2] || parsed[2*i +2] === 0){
                queueRoot.right = new TreeNode(parsed[2*i +2]);
                queue.push(queueRoot.right);

            }
        }
       
    }
            
        
        
    
    return root;
  

        
    
   
    
        
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */