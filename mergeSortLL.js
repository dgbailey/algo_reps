function LinkedList(val){
    this.val = val;
    this.next = null;
}

let myLinkedList = new LinkedList(10);
myLinkedList.next = new LinkedList(1)

let p = myLinkedList;
for(i = 0; i < 10; i++){
    let random = Math.random();

    p.next = new LinkedList(random);

    p = p.next;
    
}


//start function



const mergeSort = function(head){

    
    //getting the middle of a linked list can be achieved with a turtle and hare approach
    //recursive
    //!head and head.next is key to proper recursice base case
    if(!head || !head.next){
        return head;//could return null
    }

   
//[2,3,4,5,6]
    let copy = head;
    let middle = mid(copy);
    let otherHalf = middle.next;
    middle.next = null;

    let sorted =  merge(mergeSort(copy), mergeSort(otherHalf));
    
    return sorted

    


}
//[1,2,null] [,2,null]
//1,
function mid(head){
    if(!head){
        return null;
    }
    let slow = head;
    let fast = head;
    while(fast.next !== null && fast.next.next !== null){
       
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

function merge(a,b){
    //could take a null entry
    let result = null;
    if(!a || !b){
        return a ? a:b;
    }

    if(a.val <= b.val){
        result = a;
        result.next = merge(a.next,b);
        
    
    }
    else{
        result = b;
        result.next = merge(a,b.next)
    }
    
    return result;


}

// let a = mergeSort(myLinkedList);
// while(a){
//     console.log(a.val)
//     a = a.next;
// }

// console.log(myLinkedList)