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

    //activitiy notifications

function activityNotifications(expenditure, d) {
    
    function median(arr){
        arr.sort((a,b) => a-b)
        if(arr.length % 2 === 0){
            let med = (arr[arr.length/2 -1] + arr[arr.length/2])/2
            return med
        }
        return arr[Math.floor(arr.length/2)]
    }

    //edge case
    if(expenditure.length <= d){
        return 0
    }

    //start main function
    let notificationCount = 0
    let progress = 0
    let tempArr = []
    for(let i = 0; i < expenditure.length; i++){
        if( progress >= d){
            let med = median(tempArr)
           
            if(2*med <= expenditure[i]){
                notificationCount++
            }
            tempArr.shift()
            
           
            //compute median
            //compare to d +1
            //increment notifications count or not
            //clear temp arr
        }
        tempArr.push(expenditure[i])
        progress++
    }

    return notificationCount}