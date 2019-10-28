
// The depth of a node is the number of edges from the node to the tree's root node.
// A root node will have a depth of 0.

// The height of a node is the number of edges on the longest path from the node to a leaf.
// A leaf node will have a height of 0.


class minHeap{

    constructor(){
        this.queue = []

    }

    getMax(){
        return this.queue[0];
    }

    calcParent(index){
        return Math.floor((index -1)/2);
    }

    checkQueue(){
        return this.queue;
    }

    currIndex(){
        if(this.queue.length > 0){
            return this.queue.length -1;
        }
        else{
            return 0;
        }
    }

    insert(item){
        this.queue.push(item);
        this.bubbleUp(this.queue,this.currIndex())

    }

    ///bubble up

    bubbleUp(queue, index){

        
        let parent = this.calcParent(index);
        let child = index;

        if(this.queue[child]){
            if(this.queue[child] > this.queue[parent]){

                let temp = this.queue[parent]
                this.queue[parent] = this.queue[child];
                this.queue[child] = temp;
    
                this.bubbleUp(this.queue, parent);
            }

        }
       

       

    }

    

    trickleDown(queue,index,end){
        //max heap
        let parent = index;
        let firstChild = 2*index + 1;
        let secondChild = 2*index+2;
        let temp = queue[parent];
        


        
        if(queue[firstChild]){
           
            if(end){

                if(firstChild >= end || secondChild >= end){

                    return
                }
                else if(queue[firstChild] > queue[secondChild]){
                    console.log('beforegreat',queue)
                    if(queue[firstChild] > queue[parent]){
                        queue[parent] = queue[firstChild];
                        queue[firstChild] = temp;
                        console.log('aftergreat',queue)
                    this.trickleDown(queue,firstChild,end);
                    }
                }
                else if(queue[firstChild] <= queue[secondChild]){
                    console.log('beforeless',queue)
                    if(queue[secondChild] > queue[parent]){

                        queue[parent] = queue[secondChild];
                        queue[secondChild] = temp;
                        console.log('afterless',queue)
                        this.trickleDown(queue,secondChild,end);
                    }
                 
                
                }



            }
            else{
                if(queue[firstChild] > queue[secondChild]){
                    if(queue[firstChild] > queue[parent]){
                        queue[parent] = queue[firstChild];
                        queue[firstChild] = temp;
                    
                    this.trickleDown(queue,firstChild);
                    }
                    
                }
                else if(queue[firstChild] <= queue[secondChild]){
                    if(queue[secondChild] > queue[parent]){

                        queue[parent] = queue[secondChild];
                        queue[secondChild] = temp;
                        this.trickleDown(queue,secondChild);
                    }
                 
                
                }
            }
        
        //if our first child is greater than our second, swap parent with first
            
        }

    }

    extractMax(){
        let first = 0;
        let last = this.queue.length -1;

        let extracted = this.queue[first];

        this.queue[first] = this.queue[last];
        this.queue.pop();

        this.trickleDown(this.queue,first);

        return extracted;
    }

    maxHeapify(){
        let length = this.queue.length;
        
        for(let i = length -1; i >= 0; i--){

            console.log('current heapify',this.queue)
            this.trickleDown(this.queue,this.calcParent(i));
            

        }

        

    }
    
            
    heapSort(){
        
        for(let i = this.queue.length -1; i > 1 ;i -- ){

            let first = 0;
            let last = i;
            let temp = this.queue[first];
            this.queue[first] = this.queue[last];
            this.queue[last] = temp;
           console.log('newCycle',this.queue)

            this.trickleDown(this.queue,first,i);
            
          
        }


    }



}

let myHeap = new minHeap();
myHeap.insert(4);
myHeap.insert(3);
myHeap.insert(6);
myHeap.insert(5);
myHeap.insert(3);
myHeap.insert(1);
myHeap.insert(0);
myHeap.insert(4);
myHeap.insert(8);
myHeap.insert(2);
myHeap.insert(5);
console.log(myHeap.checkQueue());
// myHeap.heapSort();
let max = myHeap.extractMax();
console.log(max);
console.log(myHeap);
let secmax = myHeap.extractMax();
console.log(secmax);
console.log(myHeap);

let newQueue = [1,-2,10,6,44,0,4,2,5,6,7,4,9,5]
let newHeap = new minHeap();
newHeap.queue = newQueue;

console.log(newHeap.queue)
newHeap.maxHeapify();
console.log('max heaped',newHeap.queue)
newHeap.heapSort();
console.log('sorted',newHeap.queue)
//do binary tree keys in order next