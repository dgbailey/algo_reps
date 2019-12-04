//given a query and a text string 
//insert appropriate highlights

//example (fig, 'fig configure figma')
//would return fgcon<b>fig</b>ure<b>fig</b>ma
//is character in root? if not add to root with false if not complete word, and continue adding to this maps children


const highlight = function (query,text){

    let response = '';
    let count = 0;
    let indices = [];

    //iterate through string if match increment to next char of query, if full match note indices

    //this implementation is linear, but is not correct.  While loop should be utilized with two pointers.
    for(let i = 0; i < text.length; i++){
        if(text[i] === query[count]){
            count++
            if(count === query.length){
                //on full match push starting and ending index of match
                indices.push(i - (query.length -1));
                indices.push(i);


                count = 0;
                //add ending index to index array
            }
           
        }
    }
    let count2 = 0;
    for(let j = 0; j < text.length; j++){
        if(indices[count2] === j){
           
            if(count2 % 2 === 0){
                response += `<b>${text[j]}`;
                count2 ++;
            }
            else{
                response += `${text[j]}</b>`;
                count2 ++;
            }
        }
        else{
            response += `${text[j]}`;
        }
        
    }

  


    
    return response;
}

let test = 'donogs don dognabber doo';


   
console.log('incorrect',highlight('dog',test));



//TODO: The function below runs in O(m*n)
// each character of text (m) that matches the first char of our query (n) must be explored to length n to see if we have a complete match
// our previous solution was skipping over potential match start spots


//text = 'donogs don dognabber doo' query= dog

const helper = function(indArr,text){
    let count2 = 0;
    let response = '';
    for(let j = 0; j < text.length; j++){
        if(indArr[count2] === j){
           
            if(count2 % 2 === 0){
                response += `<b>${text[j]}`;
                count2 ++;
            }
            else{
                response += `${text[j]}</b>`;
                count2 ++;
            }
        }
        else{
            response += `${text[j]}`;
        }
        
    }
    return response;
}


const highlight2 = function(text,query){

    
    let queryP = 0;//query pointer
    let indices = [];

    for(let textP = 0; textP < text.length; textP++){

        if(query[queryP] === text[textP]){
            console.log(query[queryP],text[textP])
            let temp = textP +1;//start at next character
            let tempQ = queryP +1;

            while(tempQ < query.length){
              
                if(query[tempQ] === text[temp]){
                    console.log(query[tempQ],text[temp])
                    if(tempQ === query.length -1){
                        console.log('pushing')
                        indices.push(textP);
                        indices.push(textP + (query.length - 1));
                        
                        //push start and end indices to indices once we have achieved a match meeting criterion
                        break;
                    }
                    temp++;
                    tempQ++;

                }
                else{
                    break;
                }
               
                //infinite loop starts here
                
                
                
                
               
            }
            
        }
        

    }
    
    let solution = helper(indices,text);
    return solution;


}

console.log(highlight2(test,'dog'));