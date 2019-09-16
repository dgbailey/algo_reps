
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

console.log(nsteps(8,[]))