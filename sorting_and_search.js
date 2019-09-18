///sorting and search HR toys

function maximumToys(prices, k) {
    //sort toy prices
    //walk toy prices until current sum greater than k
    //return current sum - last price
    prices.sort((a,b) => a-b)
    let currentTotal = 0
    let totalGifts = 0
    for(let price of prices){
        currentTotal = currentTotal + price
        if(currentTotal <= k){
            totalGifts ++
        }
        else{
           
            break
        }
    }
    return totalGifts}