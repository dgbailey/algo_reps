//balancing brackets

function isBalanced(s) {
    let lookupMatch = {"[":"]","(":")","{":"}","]":'[',')':'(','}':'{'}
    let opening = {"[":"]","(":")","{":"}"}
    let closing = {"]":'[',')':'(','}':'{'}
    //(([])[])
    let stack = []
    stack.push(s[0])
    for(let i = 1; i < s.length; i++){
       
        if (s[i] === lookupMatch[stack[stack.length -1]]){
            // console.log('Match pop',s[i],lookupMatch[stack[i -1]])
            if(stack[stack.length -1] in closing && s[i] in opening){
                stack.push(s[i])
            }
            else{
                stack.pop()
            }
            
        }
        else{
           
            stack.push(s[i])
            
        }

    }
    if (stack.length > 0){
        return 'NO'
    }
    else{
        return 'YES'
    }
   

}