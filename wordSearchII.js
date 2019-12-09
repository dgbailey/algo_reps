/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */



class Trie{
    constructor(){
        this.dict = {};
        this.isWord = false;
    }
    
    insert(word){
        let letters = word.split('');
        let current = this;
        for(let i = 0; i < letters.length; i++){
         
            if(letters[i] in current.dict){
                current = current.dict[letters[i]];
            }
            else{
                let t = new Trie();
                current.dict[letters[i]] = t;
                current = t;
            }
        }
        current.isWord = true;
    }
    
    
    startsWith(charArr){
        let chars = charArr.split('');
        let current = this;
        for(let i = 0; i < charArr.length; i++){
            if(chars[i] in current.dict){
                
                current = current.dict[chars[i]];
               
            }
            else{
                return false;
            }
        }
        return [true,current.isWord]
    
   

}
}


var findWords = function(board, words) {
    
    let myTrie = new Trie();
    
    for(let word of words){
        myTrie.insert(word);
    }
    
    console.log(myTrie);
    let [w,bool] = myTrie.startsWith('oath');
    console.log(w,bool)
    //read words into trie
        //implement starts with function
    
    //dfs with stack
        //if starts with is true, add to stack
        //add coords to visited hash
        //if isWord reset visited has to empty
        //if isWord add word to output array
        //move on to next word start
    
    //tough to avoid quadratic time im matrix
    
};