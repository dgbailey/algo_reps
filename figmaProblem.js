//given a query and a text string 
//insert appropriate highlights

//example (fig, 'fig configure figma')
//would return fgcon<b>fig</b>ure<b>fig</b>ma
//is character in root? if not add to root with false if not complete word, and continue adding to this maps children
//Pattern matching substring search

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

//I believe this helper function is linear because it exhausts text (m) while looking for matches in indArr in a non repeating manner
const helper = function(indArr,text){
    let count2 = 0;
    let response = '';
    for(let j = 0; j < text.length; j++){//O(m)
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
         
            let temp = textP +1;//start at next character
            let tempQ = queryP +1;

            while(tempQ < query.length){
              
                if(query[tempQ] === text[temp]){
                    
                    if(tempQ === query.length -1){
                       
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




//KMP  Pattern matching in linear time

//one pass for making table (m)
//table must contain
    //1) 
    //2) char, index pairs for matches -- otherwise 0
    // e.g  a b c d a b
    //      0 0 0 0 1 2
    // e.g  a a a b c b
    //      0 1 2 0 0 3
    //e.g   a b c b a d
    //      0 0 0 0 1
//this table directs you to the appropriate index of your query so you can continue to move your pointer in text(n) forward

//one pass through string looking for mattern matches (m)

const tableMaker = function(query){

    let pointer = 0;
    let myArr = Array.from(Array(query.length)).map(item => 0);
    //initialize array of appropriate length
    for(let i = 1; i < query.length;){
        if(query[i] === query[pointer]){
            myArr[i] = pointer + 1;//placing appropriate index into table for referencing on mismatches, one indexed
            i++;
            pointer++;
        }
        else{   
            //insert zeros into our table
            if(pointer !== 0){
                pointer = myArr[pointer -1]
            }
            else{
                myArr[i] = 0;
                i++;
            }
            
        }
    }

    return myArr
}

console.log(tableMaker('abcdeabfabc'));

const kmp = function(text, query){

    const table = tableMaker(query);//creates helper table for adjusting where to begin in search query (key to overall linear runtime) O(n)
    let indices = [];
    let j = 0;
    let k = 0;
    for(let i = 0; i < text.length; i ++){
     
        if(text[i] === query[j]){
          
            k++;//increment length tracker of matched string
            if(k === query.length){
                indices.push(i - query.length +1);
                indices.push(i);
                
                k = 0;
                j = 0;
            }
            else{
               
                j++;
            }
            
            
        }
        else{
            //use our table to adjust j (table is 1 indexed not 0)
            //reset k?
           
            j = table[j]
            k= 0;
        }


    }

    let solution = helper(indices,text);
    return solution;


}

console.time('highlight2')
let highlightDOS = highlight2('ababcabcabababd','ababd');//O(nm)
console.timeEnd('highlight2');

console.time('linearkmp')
let linearKMP = kmp('ababcabcabababd','ababd');//O(n + m)
console.timeEnd('linearkmp');


// highlight2: 0.888ms
// linearkmp: 0.381ms