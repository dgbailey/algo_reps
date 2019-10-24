function binarySearch(sortedArr,value){

    let median = Math.floor(sortedArr.length/2);
    let middleValue = sortedArr[median];

    if(sortedArr.length === 1 && middleValue !== value){
        return false
    }
    
    else if(middleValue === value){
        return true
    }

    else if(middleValue > value){
        return binarySearch(sortedArr.slice(0,median),value);
    }

    else if(middleValue < value){
        return binarySearch(sortedArr.slice(median + 1),value);
    }
}

let test1 = [1,2,3,4,5,6,7];
console.time("recursive");
let result = nonRecursive(test1,1)
console.timeEnd("recursive");
console.log('Result',result);

function nonRecursive(sortedArr,value){

    let middle = Math.floor((sortedArr.length)/2);
    let lower = 0;
    let upper = sortedArr.length;
   
   


    while((upper - lower) >= 1){
        
        if(sortedArr[middle] === value){
            return true
        }
        else if(sortedArr[middle] > value){

            upper = middle;
            middle = Math.floor((upper - lower)/2);
  
        }
        else if(sortedArr[middle] < value){
            lower = middle;
            middle = Math.floor((upper - lower)/2);
            
        }

    

    }
    return false;
   


}

let test2 = [1,2,3,4,5,6,7];
console.time("nonrecursive");
let result2 = nonRecursive(test2,1)
console.timeEnd("nonrecursive");
console.log('Result',result2);


// x^y = b
//log(base x)b = y
//sqrt(x) = y
// desired
// x ^ 1/2 = y

//desired - guess * guess < tolerance ?


function sqroot(number){

    let lower = 0;
    let upper = number;
    let guess = lower + upper /2

    let error = .01;
   
    //100
    //upper 100
    //guess 50
    //new upper = 50
    //next guess = 25
    //new upper = 25
    //next guess 12.5
    //new upper 12.5
    //next guess 6.25
    //new upper 6.25
   


    while(true){

        if(guess*guess > number && Math.abs(number - guess*guess) > error){
            upper = guess;
            guess = (upper + lower)/2;
            console.log(upper,lower,guess);
        }

        else if(guess*guess < number && Math.abs(number - guess*guess) > error){
            lower = guess;
            guess = (upper + lower)/2;
            console.log(upper,lower,guess);
          
          

        }
        else if (Math.abs(number - guess*guess) < error){
            return guess;
        }
       


       
       

    }
   
}

;

let result3 = sqroot(100)

console.log('Result3',result3);