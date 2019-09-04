function hourglassSum(arr) {
  
    let sumArr = []
    for (let row = 1; row < arr.length - 1; row++){
            
        for (let col = 1; col < arr[row].length - 1; col++){
            sumArr.push([arr[row][col], arr[row - 1][col - 1], arr[row - 1][col], arr[row - 1][col + 1], arr[row + 1][col - 1], arr[row + 1][col], arr[row + 1][col +1]])
            
            console.log("sumArr",sumArr)
        }
    }


    let least = sumArr.map(element => element.reduce((accumulator, currentelement) => accumulator + currentelement), 0).sort((a, b) => b - a)[0]

    return least

}

let k = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]

]
let answer = hourglassSum(k)
console.log(answer)


//challenge 2 dynamic array

function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0
    let output = []
    let seqList = []
    for (let i = 0; i < n; i++) {
        seqList.push([])

    }
    
    for (let subQuery of queries) {
        
            if (subQuery[0] === 1) {
                let temp = (subQuery[1] ^ lastAnswer) % seqList.length
               
                seqList[temp].push(subQuery[2])
            }
            else if (subQuery[0] === 2) {
                let seq = seqList[(subQuery[1] ^ lastAnswer) % seqList.length]
                let value = seq[(subQuery[2] % seq.length)]
                console.log("seq",seq)
                lastAnswer = value
                output.push(lastAnswer)
                console.log(subQuery)
            
            }

    }
    console.log(output)
    return output}