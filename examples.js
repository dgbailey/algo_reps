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


    //sparse arrays

    function matchingStrings(strings, queries) {
        let output = []
        for (let i = 0; i < queries.length; i++){
            output.push(0)
        }
    
        for (let i = 0; i < queries.length; i++){
            for (let j = 0; j < strings.length; j++){
                if (strings[j] === queries[i]) {
                    output[i]++
                }
            }
        }
    
        return output
    
    }

    //array manipulation hard

    'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the arrayManipulation function below.
//never fully solved
function arrayManipulation(n, queries) {
    let finalArr = []
    for (let i = 0; i < n; i++) {
        finalArr.push(0)
    }
    console.log(finalArr)
    for (let query of queries) {
        let insertValue = query[2]
        let start = query[0] -1 < 0 ? 0:query[0] -1
        let finish = query[1] -1 === 1 ? 1:query[1] -1
        
        let newArr = finalArr.slice(start,finish +1).map(value => 
            
            value + insertValue
        )

        finalArr.splice(start, newArr.length, ...newArr)
        
        
            
            
        
    
        console.log('final',finalArr)
       
        
    }


    return Math.max(...finalArr)
}

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