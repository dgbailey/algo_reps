//add node to LL in JS

function insertNodeAtTail(head, data) {
    

    if (!head) {
        head = new SinglyLinkedListNode(data)
        
    }
    else {
        //important to distinguish between an actual node in LL and just plain null current = head vs current = head.next
        let current = head
        while (current.next) {
            current = current.next
        }
        current.next = new SinglyLinkedListNode(data)
        
    }
    
    
    return head}


//insert new head on SLL

function insertNodeAtHead(head, data) {
    if (!head) {
        head = new SinglyLinkedListNode(data)
    }
    else {
        let current = head
        let newHead = new SinglyLinkedListNode(data)
        newHead.next = current
        return newHead
    }

    return head

}

//Insert at position in SLL

function insertNodeAtPosition(head, data, position) {
    let counter = 0
    let current = head
    //lets end at the position before our insertion point
    while (counter < position -1) {
        current = current.next
        counter ++
    }
    //save temp of current node in desired position
    let tempNext = current.next
    //update position with new data node
    current.next = new SinglyLinkedListNode(data)
    //update new data node with tempNext
    current.next.next = tempNext

    return head
}


//SLL reversed

function reversePrint(head) {
    let stack = []
    let current = head
    //push head node to stack first
    stack.push(current)
    while (current.next) {
        stack.push(current.next)
        current = current.next
    }
    while (stack.length > 0) {
        let printItem = stack.pop()
        console.log(printItem.data)
    }

}

//compare SLL
function CompareLists(llist1, llist2) {
    let q1 = []
    let q2 = []
    let current1 = llist1
    let current2 = llist2

    q1.push(current1.data)
    q2.push(current2.data)
    while (current1.next) {
        q1.push(current1.next.data)
        current1 = current1.next
    }
    console.log('currrent1',q1)
  
    while (current2.next) {
        q2.push(current2.next.data)
        current2 = current2.next
    }
    console.log('currrent2', q2)
    if (q1.length !== q2.length) {
        return 0
    }
    else {
        for (let i = 0; i < q1.length; i++){
            if (q1[i] !== q2[i]) {
                return 0
            }
        }
        return 1
    }

    

}


//merge SLL

function mergeLists(head1, head2) {
    
    let newListHead = new SinglyLinkedListNode(-1)
    let tempHead = newListHead

    //you are motifying a property on newListHead so the referenced object is actually changing

    while (head1 && head2) {
        if (head1.data > head2.data) {
            tempHead.next = head2
            head2 = head2.next
        }
        else {
            tempHead.next = head1
            head1 = head1.next
            
        }
        tempHead = tempHead.next
    }

    tempHead.next = head1 || head2
    return newListHead.next

    


}

//get data based on position from tail
function getNode(head, positionFromTail) {
    let reversedOrderStack = []
    let current = head
    console.log(current)
    //don't forget to add head first
    reversedOrderStack.unshift(current.data)
    while (current.next) {
        reversedOrderStack.unshift(current.next.data)
        current = current.next
       
    }
    let value = reversedOrderStack[positionFromTail]
    return value

}

//remove duplicates
//this does not work if duplicates aren't sequential
//list being sorted is important here
function removeDuplicates(head) {

    //cycle through linked list
    let current = head
    while (current.next) {
        if (current.data === current.next.data) {
            current.next = current.next.next
        }
        else {
            current = current.next
        }
    }
    return head
}


//potential cycle identifier

function hasCycle(head) {
    //and SLL without a cycle will return null eventually
        let current = head
        while (current.next) {
            if (current.id === current.next.next.id) {
                return true
            }
        }
        return false
    
    }


//find merger of two linked lists

function findMergeNode(headA, headB) {
    let currentA = headA
    let currentB = headB
    let countA = 1
    let countB = 1

    while (currentA.next) {
        currentA = currentA.next
        countA++
        //usually ++A vs A++ former means increment and use new value latter means increment but use previous value
    }
    console.log(countA)
    while (currentB.next) {
        currentB = currentB.next
        countB++
    }
    

    let longest = countA >= countB ? headA : headB
    let comparison = longest === headA ? headB:headA
    let diff = (Math.abs(countA - countB)) === 0 ? 0 : (Math.abs(countA - countB))
    
    while (diff > 0) {
        longest = longest.next
        diff--
    }
    //wasn't comparing the first two links once fast forwarded
    while (longest && comparison) {
        if (longest === comparison) {
            return longest.data
        }
        longest = longest.next
        comparison = comparison.next
    }
    
}

//find merge node SLL using STACKS
function findMergeNode(headA, headB) {
    let currentA = headA
    let currentB = headB
    let stackA = []
    let stackB = []

    stackA.push(currentA)
    while (currentA.next) {
        stackA.push(currentA.next)
        currentA = currentA.next
        
        //usually ++A vs A++ former means increment and use new value latter means increment but use previous value
    }
    stackB.push(currentB)
    while (currentB.next) {
        stackB.push(currentB.next)
        currentB = currentB.next
    }
    
    //greater than or equal was necessary if one list begins with the merge point
    while (stackA.length >= 0 && stackB.length >= 0) {
        let poppedA = stackA.pop()
        let poppedB = stackB.pop()
        var temp
        console.log(poppedA)
        console.log(poppedB)
       
        if (poppedA !== poppedB) {
            return temp.data
        }
        
        temp = poppedA
        
       
        
       
    }
   
}
///look up loop identification



//INsert into sorted linked list
function sortedInsert(head, data) {
    let current = head
    let stack = []
   
    while (current) {
        
        stack.push(current)
        current = current.next
    }
    //check head
    let stackHead = stack[0]
    let stackTail = stack[stack.length -1]
  
    if (stackHead.data >= data) {
        let newNode = new DoublyLinkedListNode(data)
        newNode.next = stackHead
        newNode.prev = null
        stackHead.prev = newNode
        
        return newNode
    }
    //checkTail
    else if (stackTail.data <= data) {
        let newNode = new DoublyLinkedListNode(data)
        newNode.next = null
        newNode.prev = stackTail
        stackTail.next = newNode
        return head
    }
    else {
        for (let i = 0; i < stack.length; i++){
            if (stack[i].data > data) {
                console.log('stackgreater',stack[i])
                let newNode = new DoublyLinkedListNode(data)
                newNode.next = stack[i]
                newNode.prev = stack[i].prev
                stack[i].prev.next = newNode
                stack[i].prev = newNode
                
                return head
            }
        }
    }


    
}

//reverse DLL using nodes as helpers

function reverse(head) {
    let stack = []
    let current = head
    stack.push(current)
    while (current.next) {
        stack.push(current.next)
        current = current.next
    }
   
    let freshlyPopped = stack.pop()
    let ref = freshlyPopped
    while (current) {
  
        freshlyPopped.next = freshlyPopped.prev
        freshlyPopped.prev = current.next
        freshlyPopped = stack.pop()
        current = current.prev
    }
    return ref}

    //delete a node SLL

    //a = [1,2,3,4,4]
function deleteNode(head, position) {
    let current = head
    let stack = []
 
    stack.push(current)
    while (current.next) {
        stack.push(current.next)
        current = current.next
    }
    if (position === 0) {
        stack[position].next = null
        return stack[1]
    }
    else if (position === stack.length) {
        stack[stack.length -1].next = null
       return head
    }
    else {
        stack[position -1].next = stack[position + 1]
        return head
    }

}

//cycle detection LL python
// def has_cycle(head):
    
//     tort = head
//     hare = head.next
    
//     while tort and hare:
//         if tort == hare:
//             return 1
        
//         tort = tort.next
//         hare = hare.next
        
//     return 0

//matched brackets
//original string '[{(}]'
class LinkedList{
    constructor(link){
        this.head = link
        
    }
}

class Link{
    constructor(data){
        this.next = null
        this.data = data
    }
}

function listGen(length){
    let firstLink = new Link(5)
    let myLinkedlist = new LinkedList(firstLink)
    let current = myLinkedlist.head

    for(i = 0; i < length; i++){
        let r = Math.floor(Math.random()*10)
        let newLink = new Link(r)
        current.next = newLink
        current = current.next
        
    }
    return myLinkedlist


}





//sorting a linked list
//implement a stack (feed in linked list)
//hashmap with values as keys and nodes as values
//hashmap does present a problem with collisions
//using objects insead of integer data to avoid this
//objects doesn't avoid this

//sorting a linked list by first reading into a stack O(n), then qsorting the stack O(nlogn), then O(n) to run through sorted items and switch links

let a = listGen(9)
console.log("LinkedList",a)
function merge(sortedLL){
        current = sortedLL[0]
        for(let i = 0;i < sortedLL.length;i++){
            if (sortedLL[i +1]){
                current.next = sortedLL[i +1]
                
            }
            else{
                current.next = null
               
            }
             current = current.next
        }
        return sortedLL[0]
        
}

function pushToStack(ll){
    let stack = []
    let current = ll.head
    while(current){
        stack.push(current)
        current = current.next

   
    }
    return stack
}

function sort(stack){
 
    let left = []
    let right = []
    let equal = []
    let partition = stack[Math.floor(stack.length/2)]
    if(stack.length <=1){
        return stack
    }
    
    for(let link of stack){
        if(link.data > partition.data){
            right.push(link)
        }
        else if(link.data < partition.data){
            left.push(link)
        }
        else{
            equal.push(link)
        }
       
    }

    return sort(left).concat(equal,sort(right))






}

// let b = pushToStack(a)
// let c = merge(sort(b))

//equal stacks
//quadratic need to improve
//determined that both recursive and non recursive solutions are not sufficient with the current logic, wasn't missing a base case
function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    
    if (h1.length === 0 ||h2.length === 0|| h3.length ===0){
        return 0
    }
    
    let hashmap = {}
    let sumA = h1.reduce((a,b)=> a+b)
    hashmap[sumA] = h1
    let sumB = h2.reduce((a,b)=> a+b)
     hashmap[sumB] = h2
    let sumC = h3.reduce((a,b)=> a+b)
     hashmap[sumC] = h3
    if(sumA === sumB && sumB === sumC){
        return sumA}
    
    let firstComparison = sumA > sumB ? sumA:sumB
    let currentMax = sumC > firstComparison ? sumC:firstComparison
    hashmap[currentMax].shift()

    console.log(h1,h2,h3)
    return equalStacks(h1,h2,h3)
   

}


///leet  Two Sum (n^2 to ~n)

var twoSum = function(nums, target) {
    let hashMap = {}
    nums.forEach((number,index) => hashMap[target - number]= index)
    console.log(hashMap)
    
    for (i = 0; i <nums.length; i++){
        
        if(nums[i] in hashMap){
            
            if(hashMap[nums[i]] !== i){
            return [i,hashMap[nums[i]]]
        }
    }
    }
};

//stock trading max profit
//O(n) time O(1) space

var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0
    for(i = 0; i < prices.length; i++){
        let price = prices[i]
        let next = prices[i +1]
        if(min < next){
            
            if(next - min > profit){
                profit = next - min
            }
        }
        else{
            min = next
        }
    }
    return profit
};

// Contains dups leet

//two solutions with similar time complexity characteristics

var containsDuplicate = function(nums) {
//     let sorted = nums.sort((a,b)=> a-b)
//     for(i = 0;i<sorted.length -1;i++){
//         if (sorted[i] === sorted[i + 1]){
//             return true
//         }
//     }
// return false
    let hashMap = {}
    for(let item of nums){
        hashMap[item] = item
    }

    if(Object.keys(hashMap).length < nums.length){
        return true
    }

    return false
};
//same dups problem with hashmap O(n) as opposed to O(nlog(n)) above

var containsDuplicate = function(nums) {
    hashMap = {}
    // hashMap[nums[0]] = nums[0]
    for(i = 0; i < nums.length; i++ ){
        if(nums[i] in hashMap){
            return true
        }
        else{
            hashMap[nums[i]] = nums[i]
        }
    }
    
    return false
};

//unsatisfactory O(n^2) solution to leetcode Product of array except self
var productExceptSelf = function(nums) {
    let output = []
    let stack1 = []
    stack1.push(nums.shift())
  for(i = 0;i < nums.length +1 ;i++){
        output.push(nums.reduce((a,b) => a*b))
    
        nums.push(stack1.pop())
        
        stack1.push(nums.shift())
        
      
  }
       return output}
  
       //more acceptable 0(n) for L & R product lists same question as directly above
       var productExceptSelf = function(nums) {
        let position = 0
        let length = nums.length
        let output = []
        
       
            //left product
        let leftp = []
        leftp[0] = 1
        for(i = 1;i < length; i++){
            leftp[i] = leftp[i - 1] * nums[i -1]
        }
        console.log(leftp)
        
        //right product
        let rightp = []
        rightp[length -1] = 1
        for(i = length -1;i > 0; i--){
            rightp[i -1] = rightp[i] * nums[i]
        }
        console.log(rightp)
        
        for(i = 0;i < length; i++){
            output[i] = leftp[i] * rightp[i]
        }
        
        return output
        
    
    
    
    }