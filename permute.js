//permute algo

function permute(string,rest){
    if(rest === ""){
        console.log(string)
    }

    else{
        for(let i = 0; i < rest.length; i++){
            let next = string + rest[i]
            let remaining = rest.slice(0,i).concat(rest.slice(i + 1))

            permute(next, remaining)
        }
    }
}

// permute("","abcd")
//next = a
//remaining = bcd

//permute(a,bcd)
//next = ab
//remaining = cd


//permute(ab,cd)
//next = abc
//remaining d

//permute(abc,d) ---> does not branch
//next = abcd
//remaining = ""

//premute (abcd,"")

//combination sum

//nums = [1,2,3]
//target = 4

function comboSum(arr,target,count,index){
    //this currently yeilds unique combos, not all permuted combos
    //subtract first arr number from target
    
    
    //evaluate if we are at zero or less than zero.  If less return to next recursive call with new index and 
    if(target <= 0){
        if(target === 0){
            console.log('incrementing count')
            count++
            
           
          
        }
        return count
    }
   
    
   
    
    
    if(index < arr.length){
        let value = arr[index]
        console.log(arr,target,count,index)
        comboSum(arr,target - value,count,index)
        comboSum(arr,target,count,index +1)
       
       
        //this will go depth first recursively until - or desired total is reached
        //once this function returns'
        // arr.pop()
       

    }
   

    return
   

}

comboSum([1,2,3],4,0,0)

//1,1,1,1,1
//1,1,1,2
//1,1,3
//1,2,2

// 8 [2,3,4] 0 0 
//1st  6
//2nd 6 0 0 
//4
//3rd 4 0 0 
//2
//4th 2 0 0 //2,2,2,2
//0

