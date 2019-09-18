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

    //writing my own linked list did not improve time of above
    class LinkedList{
        constructor(node){
            this.head = node
            this.tail = null
        }
        removeHead(){
            this.head = this.head.next
           
        }
        addToTail(node){
            if(this.head.next === null){
                this.head.next = node
                this.tail = node
            }
            if(this.tail){
                this.tail.next = node
                this.tail = node
            }
            else{
                this.tail = node
            }
    
        }
    }
    
    class LlNode{
        constructor(next = null,data){
            this.next = next
            this.data = data
        }
    }
    // Complete the activityNotifications function below.
    function activityNotifications(expenditure, d) {
        
        function median(ll){
            let temp = []
            let current = ll.head
            while(current){
                temp.push(current.data)
                current = current.next
            }
    
            temp.sort((a,b) => a-b)
            if(temp.length % 2 === 0){
                let med = (temp[temp.length/2 -1] + temp[temp.length/2])/2
                return med
            }
            return temp[Math.floor(temp.length/2)]
        }
    
        //edge case
        if(expenditure.length <= d){
            return 0
        }
    
        //start main function
        let notificationCount = 0
        let progress = 1
        let start = new LlNode(null,expenditure[0])
        let tempArr = new LinkedList(start)
        
        
        for(let i = 1; i < expenditure.length; i++){
            if( progress >= d){
                //O nlog(n)
                let med = median(tempArr)
               
                if(2*med <= expenditure[i]){
                    notificationCount++
                }
                //O(n)
                tempArr.removeHead()
                
               
                //compute median
                //compare to d 
                //increment notifications count or not
                //clear temp arr
            }
            let newNode = new LlNode(null,expenditure[i])
            tempArr.addToTail(newNode)
            progress++
        }
    
        return notificationCount
    
    
        
    
    
    }