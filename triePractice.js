/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.map = {};
    this.isWord = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this;
    let letters = word.split('');
    
    for(let i = 0; i < letters.length; i++){
        if(letters[i] in current.map){
            current = current.map[letters[i]];
        }
        else{
            let node = new Trie();
            current.map[letters[i]] = node;
            current = current.map[letters[i]];
        }
    }
    current.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let letters = word.split('');
    let current = this;
    
    for(let i = 0; i < letters.length; i ++){
        console.log('current',letters[i])
        if(letters[i] in current.map){
            
            current = current.map[letters[i]];
        }
        else{
           return false;
        }
    }
    return current.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let letters = prefix.split('');
    let current = this;
    for(let i = 0; i < letters.length; i++){
        if(letters[i] in current.map){
            current = current.map[letters[i]];
        }
        else{
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 const myTree = new Trie();
 myTree.insert('apple');
 console.log(myTree.search('apple'));
 console.log(myTree.startsWith('az'));

//  console.log('starts',myTree.startsWith('az'));