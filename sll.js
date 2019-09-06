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