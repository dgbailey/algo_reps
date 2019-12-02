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
            
            current = current.insertHelper(charArr[i]);
        }

        //final insert
        current.isWord = true;


    }

    

    search(query){
        // TODO: for char in query, check current for char
        // if not in current, return false
        // if in current
            //check if isWord
                //if word return true
            //else
                //return next char node and repeat process
        let queryArr = query.split('');
        let current = this;
        for(let char of queryArr){
            console.log(current.children,char);
            if(!char in current.children){
                return false
            }

            else if(char in current.children){
                if(current.isWord){
                    return true;
                }
                else{
                    current = current.children[char];
                }
            }
        }
        return current.isWord;
    }
}



//example

let root = new Node();
let text = 'banana';
let next = 'ban';
root.insert(text.split(''));
root.insert(next.split(''));
root.insert('car'.split(''));
console.log(root.search('car'));