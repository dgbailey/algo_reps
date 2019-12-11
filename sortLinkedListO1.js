/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head){
        return head;
    }
    //recursion can be log(n) space complexity for bottom up mergesorting linked lists
    let result = head;
    let next;
    let i = 0;
    let pArray = Array.from(Array(10)).map(u => null);
    while(result){
        
        next = result.next;
        result.next = null;
        
       
        
        for(let i = 0; i < 10 && pArray[i] !== null;i++){
            
            result = merge(pArray[i],result)
            pArray[i] = null;
           
        }
        
        if(i === 32){
            i--;
        }
        
        pArray[i] = result;
       
        result = next;
    }
    
    result = null;
    for(let i = 0;i < pArray.length; i++){
        result = merge(result,pArray[i])
    }
    
    return result;
    
    
    
};
    
var merge = function(a,b){
   
    let dummyA = a;
    let dummyB = b;
    let n = null;
    let head;
    
    if(!a || !b){
        return a === null ? b:a;
    }
    
   while(dummyA && dummyB){
       if(dummyA.val <= dummyB.val){
           if(!n){
                n = dummyA;
                dummyA = dummyA.next;
                head = n;
           }
          else{
              n.next = dummyA;
              n = n.next;
               dummyA = dummyA.next;
          }
          
       }
       else if(dummyA.val > dummyB.val) {
          if(!n){
                n = dummyB;
                dummyB = dummyB.next;
                head = n;
           }
           
          else{
              n.next = dummyB;
              n = n.next;
               dummyB = dummyB.next;
              
          }
          
       }
       
       
   }
    if(!dummyA){
        while(dummyB){
             n.next = dummyB;
             n = n.next;
             dummyB = dummyB.next;
        }
    }
    else{
         while(dummyA){
             n.next = dummyA;
             n = n.next;
             dummyA = dummyA.next;
        }
    }
    return head;

};