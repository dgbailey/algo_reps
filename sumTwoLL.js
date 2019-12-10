/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
    //you added unecessary space complexity
    //you weren't sure how to handle lists of varying lengths
    //you didn't anticipate having to keep track of a carry for addition
    
    let stack1 = [];
    let stack2 = [];
    
    let current1 = l1;
    while(current1){
        stack1.push(current1);
        current1 = current1.next;
    }
    
    let current2 = l2;
    while(current2){
        stack2.push(current2);
        current2 = current2.next;
    }
    
    let longer = stack1.length >= stack2.length ? stack1:stack2;
    let shorter = stack1.length < stack2.length ? stack1:stack2;
    let count = shorter.length;
    while(count > 0){
        let a = stack1.pop();
        let b = stack2.pop();
      
        
        a.val = a.val + b.val;
          console.log(a.val)
        count--;
    }
    
    
    
    
    //push nodes to the stack
    //determine longer stack
    //pop and add to longer
    //reverse and return longer
};