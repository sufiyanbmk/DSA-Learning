const findDuplicate = input => {
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }
        else{
            map[input[i]] = i;
        }
        console.log(map)

    }
    return undefined;
}

let array = [2,4,5,2,3,4,6,7,9];

let result = findDuplicate(array);
console.log(result);