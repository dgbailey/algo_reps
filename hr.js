//failed HR min time

// / Complete the minTime function below.
function minTime(machines, goal) {
    //hashmap
    //read in machine values incrementing output value for each key dupe
    //O(n)
    //run loop starting at 1 until incrementing production count until goal is met
    //O(n)

    //O(1)?
    //O(logn)?
    // binary log(n)
    let working = true
    
    let lower = 1
    let upper = goal*Math.min(...machines)
    let guessDays = Math.floor((lower + upper)/2)
    while(working){
        
        
        console.log(guessDays)
        console.log(lower,upper)
        let work = machines.map(value=>Math.floor(guessDays/value)).reduce((value,accumulator) => value + accumulator)
        console.log('work',work)
        //O(n)for work
        if(work === goal){
            
            return guessDays
        }
        else{
            if(work < goal){
                lower = guessDays
                guessDays = Math.floor((lower + upper)/2)
            }
            else{
                upper = guessDays
                guessDays = Math.floor((lower + upper)/2)
            }
        }
        
       




    }
    
    
    

    //goal 1 to N is the range
    // pick lowest machine 20days to produce 10 items
    //1 -20 is my upper bound
    //pick 10  for each machine (10/rate = items) eg 5 + 5 + 3 if GT goal upper == 10
    //2 + 2 + 1 = 5
    //lower = 5
    //7
    //1/3 + 1 = 4/3
    //3 3 2 = 8
    //lower = 7 
    //8  4 4 2

}

// Complete the maximumSum function below.
// check out this time complexity
//it is failing
function maximumSum(a, m,index = 0,value = 0,sumArr=[]) {
    
    let modulus = (a[index] + value) % m
    let newValue = a[index] + value
    if(modulus){
        sumArr.push(modulus)
    }
    
    if(index === a.length){
        return
    }

    maximumSum(a,m, index +1,a[index],sumArr)
    maximumSum(a,m, index +1,value,sumArr)

//recursion?
//O(n)
    return Math.max(...sumArr)

}

console.log(maximumSum([3,3,9,9,5],7))