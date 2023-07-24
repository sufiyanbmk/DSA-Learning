class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
        return this;
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1)
        return this;
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( 
            vertex => vertex !== v2
        )
        this.adjacencyList[v2]= this.adjacencyList[v2].filter( 
            vertex => vertex !== v1
        )
        return this;
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null;
        }
        while(this.adjacencyList[vertex].length){
            const adjacecyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacecyVertex);

        }
        delete this.adjacencyList[vertex]
        return this;
    }
    depthFirstSearchRecusive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(element => {
                if(!visited[element]){
                    return dfs(element)
                }
            });
        })(start)
        return result;
    }
    depthFirstSearchIterative(start){
        if(!this.adjacencyList[start]) return null;
        let result = [];
        let visited = {};
        let stack = [start];
        let temp;

        visited[start] = true;
        while(stack.length){
            temp = stack.pop();
            result.push(temp)
            this.adjacencyList[temp].forEach(element => {
                if(!visited[element]){
                    stack.push(element);
                    visited[element] = true;
                }
            })    
        }
        return result;
    }

    bredthFirstSearch(start){
        let result = [];
        let visited = {};
        let queue = [start];
        let temp;
        visited[start] = true
        while(queue.length){
            temp = queue.shift()
            result.push(temp)
            this.adjacencyList[temp].forEach(element => {
                if(!visited[element]){
                    queue.push(element);
                    visited[element] = true;
                }
            })
        }
        return result;
    }
   
}

const g = new Graph()
g.addvertex('tokoyo')
g.addvertex('japan')
g.addvertex('america')
g.addEdge('tokoyo','america')
g.addEdge('tokoyo','japan')
// g.removeEdge('tokoyo','japan')
// g.removeVertex('america');
// console.log(g.depthFirstSearchRecusive("tokoyo"))
// console.log(g.depthFirstSearchIterative("tokoyo"))
console.log(g.bredthFirstSearch("tokoyo"))
