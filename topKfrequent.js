/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//perhaps review with a bucket sort
 //completed with heap. Not really fast or space efficient

 //difficult to remember
 //sifting down, accounting for changes in heap size and potential child indices, making sure comparions are in range
 //making sure children equal in value are still compared with the parent node

 
class Node{
    constructor(val,freq){
        this.val = val;
        this.freq = freq;
    }
}

class MaxHeap{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    
    //bubble up
    bubbleUp(index){
        let parent = Math.ceil(index/2 - 1);
        if(this.arr[parent]){
            if(this.arr[index].freq > this.arr[parent].freq){
            let temp = this.arr[parent];
            this.arr[parent] = this.arr[index];
            this.arr[index] = temp;
            this.bubbleUp(parent);
            }
        }
        
        //[1,2,3,4,5]
    }
    
    //insert
        //bubble up
    insert(node){
        this.arr.push(node);
        this.size++;
        this.bubbleUp(this.size -1);
        
    }
        //increment size
    
    //delete
      //swap root with last
        //sift down?
        //decrement size
        //return first
    delete(){
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.size -1];
        this.arr[this.size -1] = temp;
        this.size--;
        this.siftDown(0);
   
        // return parseInt(temp.val);
    }
    
    //siftdown
    siftDown(index){
        let child1 = index*2 + 1;
        let child2 = index*2 + 2;
        if(child1 < this.size && child2 < this.size){
             if(this.arr[child1].freq >= this.arr[child2].freq  ){
            if(this.arr[child1].freq > this.arr[index].freq){
                let temp = this.arr[index];
                this.arr[index] = this.arr[child1];
                this.arr[child1] = temp;
                this.siftDown(child1);
            }
        }
        
            if(this.arr[child2].freq > this.arr[child1].freq){
            if(this.arr[child2].freq > this.arr[index].freq){
                let temp = this.arr[index];
                this.arr[index] = this.arr[child2];
                this.arr[child2] = temp;
                this.siftDown(child2);
                }
            }
        }
        else{
            if(child1 < this.size){
                  if(this.arr[child1].freq > this.arr[index].freq){
                let temp = this.arr[index];
                this.arr[index] = this.arr[child1];
                this.arr[child1] = temp;
                this.siftDown(child1);
            }
            }
            else{
                  if(child2 < this.size){
                      if(this.arr[child2].freq > this.arr[index].freq){
                          let temp = this.arr[index];
                            this.arr[index] = this.arr[child2];
                            this.arr[child2] = temp;
                            this.siftDown(child2);
                      }
                
            }
            }
        }
        
    };
      
};


var topKFrequent = function(nums, k) {
    //frequencies in a hash table
    
    let hash = {};
    for(let n of nums){
        if(n in hash){
            hash[n]++;
        }
        else{
            hash[n] = 1;
        }
    }
    
    let mH = new MaxHeap();
    for(let key of Object.keys(hash)){
        let n = new Node(key,hash[key]);
        mH.insert(n);
    }
    
    let results = [];
    
    for(let i = 0; i < k; i ++){
        
        let max = parseInt(mH.arr[0].val);
        results.push(max);
        mH.delete();
         console.log(mH)
    }
   

    return results;
   
    //how do we determine k most frequent from hash table?
    //could I store them in an array?
    //frequency hashmap
    //key:freq
    
    //insert key:freq Node into maxheap
    //m(length of unique keys)
    //m(unique nodes in BT) 
    //insertion here mlog(m) will be quicker than nlog(n) in each case unless you have one of each node
    
    //k deletions from max heap (klog(m))
    //
    
    
    
};