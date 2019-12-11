/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

//failed attempt.  Can't figure out a way to properly share histories between multiple dfsearches

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
                return [false,false];
            }
        }
        
        return [true,current.isWord]
    
   

}
}


var findWords = function(board, words) {
    
    let myTrie = new Trie();

    let visited = {};
    let solution = {};
    
    for(let word of words){
        myTrie.insert(word);
    }
    
    
    for(let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            
            dfs(i,j);
            visited = {}; //clear visited for next dfs
            console.log(soltion)
        }
    }
    
    return Object.keys(solution);
    //each execution context will contin its own s
    function dfs(i,j,matched=""){
        let n = neighbors(i,j);
        
        for(let coord of n){
                if(coord[0] > board.length -1 || coord[0] < 0){
                    continue;
                }
                if(coord[1] > board[0].length -1 || coord[1] < 0){
                    continue;
                }
            
               
                let visitCheck = `${coord[0]}${coord[1]}`;
               
            
                if(visitCheck in visited){
                    continue;
                }
            
                let checkPrefix = `${matched}${board[coord[0]][coord[1]]}`;
              
                let [s,aWord] = myTrie.startsWith(checkPrefix);
                console.log(n)
                console.log(checkPrefix,s,coord)
                
                if(s){
                    matched += board[coord[0]][coord[1]];
                    if(aWord){
                        solution[matched] = matched;
                        
                        
                    }
                    visited[`${coord[0]}${coord[1]}`] = true;
                    dfs(coord[0],coord[1],matched);
                }
            
                visited[`${coord[0]}${coord[1]}`] = true;
            }
    }
    
    function neighbors(row,col){
        let me = [row,col];
        let l = [row,col -1];
        let r = [row,col + 1];
        let u = [row +1, col];
        let d = [row -1, col];
        return [me,l,r,u,d];
    }
   
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