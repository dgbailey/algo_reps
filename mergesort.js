function mergeSort(array){

    if(array.length === 0){
        return 0
    }
    //return once we have recursed to len 1
    if(array.length <= 1){
        return array
    }
    const middle = Math.floor(array.length/2)
    let left = array.slice(0,middle)
    let right = array.slice(middle)
  
    let dfleft = mergeSort(left)
    let dfright = mergeSort(right)
   
    
    return mergeFinal(dfleft,dfright)


}

function mergeFinal(left,right){
    let count = 0
    let newArr = []
    let index = 0
    let leftStart = index
        
    let rightStart = index
    

    while(leftStart < left.length && rightStart < right.length ){
        
        if(left[leftStart] < right[rightStart]){
            newArr[index] = left[leftStart]
            index++
            leftStart++
            count++
            
        }
        else{
            newArr[index] = right[rightStart]
            index++
            rightStart++
           

        }
    }
   
    if(leftStart < left.length){
        newArr = newArr.concat(left.slice(leftStart))
    }
    else{
        
        newArr = newArr.concat(right.slice(rightStart))
        
    }
    
    
    return newArr
}

const testArr = [2,1,3,1,2]
const answer = mergeSort(testArr)
console.log('answer',answer)