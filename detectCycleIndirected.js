//trying to detect a cycle in a directed graph
//When Array is called as a function rather than as a constructor, it creates and initialises a new Array object. Thus the function call Array(...) is equivalent to the object creation expression new Array(...) with the same arguments.


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    //map of each course and prerequisites
    let map = Array.from(Array(numCourses)).map(r => []);

    prerequisites.forEach(([c,p]) => map[c].push(p));
    console.log(map)
    
    //set of visited courses
    let visited = new Set();
    //list of current courses in dfs
    let visiting = new Set();
 
    //for our number of courses
    for(let i = 0; i < numCourses; i++){
        if(!dfs(i)){
            //if we encounter circular dep return handle false returned
    
            return false
        }
        //not sure if we need anything here yet
    }
    return true;
        //perform dfs()
        
    //dfs
    function dfs(vertex){
    
           //if dependency in visited return true
          //if dependency in currently visit return false
        if(visited.has(vertex)) return true;
        if(visiting.has(vertex)) return false;
          //for each child dep
            //conduct recursive dfs()
        visiting.add(vertex);
        for(let dep of map[vertex]){
            if(!dfs(dep)){
                return false;
            } 
        }
        visited.add(vertex);
        visiting.delete(vertex);
        return true;
        
          //add child dep to visited
        //delete child dep from currently visiting
        
        //return true if we exhaust children w/o finding cycle
        
    }
    
     
      
    
      

      
};