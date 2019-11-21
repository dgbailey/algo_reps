function deepHelper(arr,newArr=[]){
    //takes an array
    //recursively builds new array of objects
    
    console.log(arr)
   
    for(let i = 0;i < arr.length; i++){
        
        newArr.push(new Node(arr[i].val,deepHelper(arr[i].neighbors)))
        console.log(arr);
    }
    
    return newArr;
}

function Node(val,neighbors) {
    this.val = val;
    this.neighbors = neighbors;
}

let test = [{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}];

console.log(deepHelper(test));