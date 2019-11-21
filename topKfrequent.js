/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

class BST{
    constructor(root){
        this.root = root;
        this.size = 0;
    }
    
    bubbleUp(index){
        let parent = Math.ceil(index/2 - 1);
        let child = index;
        if(this.storage[parent].value < this.storage[child].value){
            let temp = this.storage[parent];
            this.storage[parent] = this.storage[child];
            this.storage[child] = temp;
            
            bubbleUp(parent);
        }
   
        
    }
    
    insert(node){
        this.storage.push(node);
        //bubble up
    }
}
var topKFrequent = function(nums, k) {
    //standard sorting is out
    
    //hash map -- not clear approach
        //read in values
        //on collision update frequency
        //read frequencies into a BST
        //return bst root, root.right, root.right.right
    
    //read key values into a max heap -- would end up being nlogn
        //hashmap
        //max heap
        //delete max twice
        //return max
    
    //linear sort of keys by frequency
        //for key in Object.keys(hash)
        //BST approach also nlogn at best
    
    //what if we have ties?
    //store key values in an array based on frequency%arraysize (9)
    

    let hash = {};
    
    //read values and frequencies into hash
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hash){
            hash[nums[i]]++;
        }
        else{
            hash[nums[i]] = 1;
        }
    }
   
    let keys = Object.keys(hash);
    console.log(hash)
    let final =  Array.from(Array(9),() => 0);
    for(let j = 0; j < keys.length; j++){
        let index = hash[keys[j]] % final.length;
        console.log(index)
        final[index] = keys[j];
    }
    console.log('p',final)
    
    let output = [];
    let end = 0;
    console.log('final',final)
    for(let l = final.length -1; l >= 0; l--){
        if(end < k){
             if (final[l] !== 0){
            output.push(parseInt(final[l]));
            end++
        
        }
       
    }
    }
    
    
  return output;
    
   
    
    
};