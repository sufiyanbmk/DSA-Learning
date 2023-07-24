function encode(string,inc) {
    let key = inc % 26
    let length = string.length
    let str = ''
    let i=0
    while (i < length) {
        let letterposition = string.charCodeAt(i) + key
        console.log(string.charCodeAt(i))
        if (letterposition <= 122) {
            str+=String.fromCharCode(letterposition)
            console.log(str,"letter")
        } else {
            str+=String.fromCharCode(96+(letterposition%122))
        }
        i++
    }

    return str;
   
}

function decode(string,dec){
    let key = dec % 26 
    let length = string.length;
    let str = ''
    let i=0 
    while (i< length){
        let ascii = string.charCodeAt(i) - key 
        if(ascii >= 97) {
            str += String.fromCharCode(ascii)
        } else {
            str+= String.fromCharCode(122-(ascii%97))
        }
        i++
    }
    return str;
    console.log(str)
}


let str = 'ihged'
let code = decode(str,3)
console.log(code);