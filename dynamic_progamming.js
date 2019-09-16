var coinChange = function(coins, amount) {
    
    if(amount === 0){
        return 0
    }
    let dynamicPArray = new Array(amount +1).fill(amount + 1)
    dynamicPArray[0] = 0
    for(let i = 1; i <= amount;  i++){
        for(let j = 0; j< coins.length; j++){
            if(coins[j] <= i){
                dynamicPArray[i] = Math.min(dynamicPArray[i],dynamicPArray[i - coins[j]] + 1)
            }
        }
    }
    
    return dynamicPArray[amount] > amount  ? -1: dynamicPArray[amount]
    //fewest number of coins to make a certain total
    
    //one coin that equals the amount return that coin
    //no coins that equal amount return -1
    
    //you can have duplicate coins in array
    //we dont know our coin values ahead of time
}


//cookies or steps

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
