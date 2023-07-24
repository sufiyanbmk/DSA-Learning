function hash(item,tablesize){
    let hash = 17;
    for(let i = 0; i < item.length; i++){
        hash = (13 * hash * item.charCodeAt(i)) % tablesize;
    }
    return hash;
}
class HashTable{
    table = new Array(100)

    setItem(key,value){
       const indX  = hash(key,this.table.length);
       if(!this.table[indX]){
        this.table[indX] = []
       }
       this.table[indX].push([key,value]);
    }

    getItem(key) {
        const indX = hash(key,this.table.length)
        if(this.table[indX]){
            for(let i = 0; i < this.table[indX].length; i++){
                if(this.table[indX][i][0] === key){
                    console.log(this.table[indX][i][1])
                    return this.table[indX] [i]
                }
            }
        }
        return undefined;
    }
}

const mytable = new HashTable();
mytable.setItem("firstname","sufiyan")
mytable.setItem("lastname","sm")
mytable.setItem("age",20);

console.log(mytable.getItem("firstname"))
