
function fib(n){
    if(n <= 1){
        return n
    }
   

    return fib(n -1) + fib(n -2)
}

// console.log(fib(10))

//why would I include a caching object? 
function memFib(n,mem){

   
    if(n <=1){
        return n
    }

    

    if(mem[n] === undefined){
        mem[n] = memFib(n -1,mem) + memFib(n -2,mem)
    
        
    }

    return mem[n]
    

    
}

// console.log("memFIB",memFib(100,[]))

function factorial(n){
     if(n <= 1){
         return n
     }
     return n * factorial(n -1)
}

console.log(factorial(9))


function nsteps(n,memo){
    if(n === 1 || n === 0){
        return 1
    }

    else if(n ===2){
        return 2
    }

    else if(memo[n] !== undefined){
        return memo[n]
    }

    if(memo[n] === undefined){
        memo[n] = nsteps(n - 1,memo) + nsteps(n - 2, memo)+ nsteps(n -3,memo)
    }

    return memo[n]
}

// 1 or 2 steps only

function nsteps(n,memo){
    if(n === 1 || n === 0){
        return 1
    }

    else if(n ===2){
        console.log("eeyyy")
        return 2
    }

    else if(memo[n] !== undefined){
        return memo[n]
    }

    if(memo[n] === undefined){
        memo[n] = nsteps(n - 1,memo) + nsteps(n - 2, memo)
    }
    
    return memo[n]
}

console.log(nsteps(3,[]))

//a[i] = i
//sorted
//distinct

function findMagic(arr){
    for(i = 0; i < arr.length; i++){
        if (arr[i] === i){
            return i
        }
    }
}

//forgot about negative numbers in array
// console.log(findMagic([-2,-1,2,3,1]))

// function binaryMagic(arr){
//     //[0,1,2,3,5,7,8,9,10]
//      //[5,4,2,1]
//      //[2,3,4,]

//      let guessIndex = Math.floor(arr.length)

// }

//subsets

function subsets(s){
    //base cases
    //new set([a,b,c,d])
    //(a,b)
    //(a)
    //(a,b,c)
    //
}

var climbStairs = function(n,memo) {
   
    
    if(n <= 1){
        return 1
    }
    
    if(!memo[n]){
        memo[n] = climbStairs(n - 1,memo) + climbStairs(n -2,memo)
    }

    else if(memo[n] !== undefined){
        return memo[n]
    }
    return memo[n]
      
};

console.log("climbstairs",climbStairs(3),{})