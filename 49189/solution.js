const bfs = ((arr,start,end) => {
    let visited=new Array(end+1);
    let level=new Array(end+1);
    let queue=[start];

    level[0]=0;
    level[start]=0;
    visited[start]=true;
    let lev;
    while( queue.length){
        
        var node = queue.shift()
        lev = level[node]+1
        for( var edge of arr){
            if(edge[0] === node && visited[edge[1]] === undefined) {
                queue.push(edge[1])
                visited[edge[1]]=true
                level[edge[1]]=lev
            }
            else if(edge[1] === node && visited[edge[0]] === undefined) {
                queue.push(edge[0])
                visited[edge[0]]=true
                level[edge[0]]=lev
            }
        }
    }
    return level.filter((i)=>i === lev-1).length
})

function solution(n, edge) {;
    return bfs(edge,1,n);
}
