/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //length of linked list not know
    //ideally you would stop at n + 1 from the end
    
    //make one full iteration to get length of list
    //use data structure to hold nodes
    
    
    
    let nodeCache = [];
    let current = head;
    
    while (current){
        nodeCache.push(current);
        current = current.next
    }
    let length = nodeCache.length;
    
    if(n === length){
        return head.next
    }
    
    if(n === 1){
        nodeCache[nodeCache.length -2].next = null;
        return head;
    }
    
    
    let nth = nodeCache[length - n -1]
    let nplusOne = nodeCache[length - n + 1]
    
    nth.next = nplusOne;
    
    return head;
};