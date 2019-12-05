/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

 //big differences in this version of KMP compared to figmaProblem optimization
 //specifically in search algorithm, detemining when we have a one valid match vs. looking for multiple matches
var isSubtree = function(s, t) {
    
    //serialize s & t
      console.time('serialize1')
      let serializedS = serialize(s);
      console.timeEnd('serialize1')
      console.time('helperMap')
      console.time('serialize2')
      let serializedT = serialize(t);
      console.timeEnd('serialize2')
      
      //kmp substring search
      console.time('helperMap')
      let map = helperMap(serializedT);
      console.timeEnd('helperMap')
      console.time('solution')
      let solution = kmp(serializedS,serializedT);
      console.timeEnd('solution')
      return solution;
     
      
  };
  
  var helperMap = function(query){
      //this is a helpful map for our query
      //based on where my match fails, I can determine non naively
      //where I can resume my matching 
      //falure at a non zero index must mean that we have a reusable part of our pattern
      //somewhere.  that somewhere
      // is the index we created
      // under each letter in our helper table
      //and we can resume matching at that index
      //4 1 e e 2 e e
      //0 0 0 0 0 0 0
      let myMap = Array.from(Array(query.length)).map(i => 0);
      
      let pointer = 0;
      for(let i = 1; i < query.length;){
          if(query[pointer] === query[i]){
              myMap[i] = pointer + 1;
              i++;
              pointer++;
          }
          else{
              if(pointer !== 0){
                  pointer = myMap[pointer -1]
              }
              else{
                  myMap[i] = 0;
                  i++;
              }
          }
      }
      return myMap;
  }
  //o(t)
  var kmp = function(text,query){
      let map = helperMap(query);
      let j = 0;
     
      //edge
      
      if(text === query){
          return true;
      }
      
      
      for(let i = 0; i < text.length;){
          if(text[i] === query[j]){
             
             
              if(j === query.length -1){
                  
                  return true;
              }
              j++;
              i++;
          }
          else{
              if(j !== 0){
                  j = map[j -1];
                  
                  // console.log('k',k)
              }
              else{
                  i++;
              }
              //if no match we need to adjust j based on previous patterns
              
          }
      }
      return false;
      
      
  }
  //O(n)
  var serialize = function(node){
      let result = '';
      trace(node);
      return result;
      
      function trace(node){
           if(!node){
          result += 'e ';
          return;
          }
      
      
      result += `"${node.val}" `;
      
      trace(node.left);
      trace(node.right);
  
  
      }
     
      
  }
  
  //deep compare some serialized form of the subtree and other tree
  //or simultaneous traversal