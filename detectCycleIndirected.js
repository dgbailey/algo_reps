//trying to detect a cycle in a supposedly acylic directed graph
//When Array is called as a function rather than as a constructor, it creates and initialises a new Array object. Thus the function call Array(...) is equivalent to the object creation expression new Array(...) with the same arguments.

// 1) In this solution we create somewhat of a topoligical sort.  Two sets are used for evaluating if we have encountered a cycle on our current
//dfs exploration.  
//2) The other is used to keep track of each origin we have already explored as to not repeat work.
//3) Vertices are moved between these two data structures as we exhaust depth first explorations.
//4) If we encounter a cycle (a dupe node already in visiting) we return false to the previous stack frame, which eventually bubbles up
//to our initial loop starting on line 30.

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