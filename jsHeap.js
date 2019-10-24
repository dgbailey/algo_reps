
class minHeap{

    constructor(){
        this.queue = []

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

        if(this.queue[child] < this.queue[parent]){

            let temp = this.queue[parent]
            this.queue[parent] = this.queue[child];
            this.queue[child] = temp;

            this.bubbleUp(this.queue, parent);
        }

       

    }
    //trickle down



}

let myHeap = new minHeap();
myHeap.insert(4);
myHeap.insert(3);
myHeap.insert(6);
myHeap.insert(5);
myHeap.insert(3);
myHeap.insert(1);
console.log(myHeap.checkQueue());

//do binary tree keys in order next