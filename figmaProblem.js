//given a query and a text string 
//insert appropriate highlights

//example (fig, 'fig configure figma')
//would return fgcon<b>fig</b>ure<b>fig</b>ma
//is character in root? if not add to root with false if not complete word, and continue adding to this maps children
/*


    [f],[c]
    /    / 
[i]     [o]
/         
[g]
 \
 [m]
   \
   [a] 

//traverse the tree
//if we have a match in the string, increment inde of search index


*/

class Node{

    //each node contains a map of characters,
    constructor(children = {},isWord = false){
        this.children = children
        this.isWord = isWord
    }

    insertHelper(char){

        if(char in this.children){
            return this.children[char]
        }
        else{
            let node = new Node();
            this.children[char] = node;
            return this.children[char];
        }
        
        //returns matched node associated with character
        //if not create new node and insert char in children dict with value as node
    }

    insert(charArr){

        // TODO:for each char check if in current nodes children, if exists , update current node with approp child
        // repeat until chars are exhausted 
        // final insert will be a new node with isWord set to true

        //banana
        //root = new Node()
        //root.insert([b,a,n])
        let current = this;

        for(let i = 0; i < charArr.length; i ++){
            
            current = this.insertHelper(charArr[i]);
        }

        //final insert
        current.isWord = true;


    }
}

//example (fig, 'fig configure figma')
//brute force
//didn't see in interview that if you keep first and last indices conditionally you are able to solve via brute force
//O(m*n)??? or just O(m)
//where m is length of text and n is query length

const highlight = function (query,text){

    let response = '';
    let count = 0;
    let indices = [];

    //iterate through string if match increment to next char of query, if full match note indices
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

let test = ['doggy don dognabber doo','doggy don dognabber doo doggy don dognabber doo',
'doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo',
'doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo doggy don dognabber doo'];

for(let item of test){
    console.time('highlight')
    highlight('dog',item);
    console.timeEnd('highlight')
}
