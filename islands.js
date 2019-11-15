/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //matrix traversal n^2
    let islandCount = 0;
    for(let i = 0 ; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            
            //how do I know I have an island?
            //dfs
            
            if(grid[i][j] === '0'){
                continue;
            }
            
            islandCount++;
            dfs(i,j);
        }
        
    }
    console.log(grid)
    return islandCount;
    
    function dfs(row,col){
        if(row  < 0 || col  < 0 || row === grid.length || col === grid[0].length){
            return;
        }
        if(grid[row][col] === '0'){
            return;
        }
        grid[row][col] = '0';//visited
        dfs(row -1, col);
        dfs(row +1,col);
         dfs(row, col -1);
        dfs(row, col +1);
       
        
        
    }
    
};