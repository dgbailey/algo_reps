
function fib(n){
    if(n <= 1){
        return n
    }
   

    return fib(n -1) + fib(n -2)
}

// console.log(fib(10))


function memFib(n,mem){

   
    if(n <=1){
        return n
    }

    

    if(mem[n] === undefined){
        mem[n] = memFib(n -1,mem) + memFib(n -2,mem)
    
        
    }

    return mem[n]
    

    
}

console.log("memFIB",memFib(100,[]))