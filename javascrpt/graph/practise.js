class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    insert(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addvertex(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( ele =>{
            ele !== v2
        })
    }
    removeVertics(vertex){
        let temp;
        if(!this.adjacencyList[vertex]){
            return null;
        }
        this.adjacencyList[vertex].forEach(element => {
            temp = this.adjacencyList.pop()
            this.removeEdge(vertex,temp)
        });
    }
    dfs(start){
        let visited = {}
        let result = [];
        let stack = [start];
        let temp;
        visited[stack] = true;
        while(stack.length){
            temp = stack.pop()
            result.push(temp)
           this.adjacencyList[temp].forEach( ele => {
            if(!visited[ele]){
                stack.push(ele)
                visited[ele] = true;

            }
           })
        }   
    }
}