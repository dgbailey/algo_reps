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

