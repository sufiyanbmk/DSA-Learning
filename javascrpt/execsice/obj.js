// let obj = abc()

// function abc(){
//   let obj = {
//     sum(num){
//         return num;
//     },
//     diff(num2){
//         return num2
//     },
//     gett(){
//         return this.sum(10) - this.sum(2);

//     }
//   }
//   let result1 = obj.sum(10)
//   let result2 = obj.diff(2)
//   console.log(obj.gett())
// }
// console.log(obj)

function abc(){
    let result = 0;
    return {
        sum : (x)=>{
            result += x;
        },
        diff : (x) => {
            result -= x;
        },
        div : (x)=>{
            result = result/x;
        },
        get : () => {
            return result;
        }
    }
}

let obj = abc();
obj.sum(10);   //10;
obj.diff(2)    //8;
obj.div(2)     //4
console.log(obj.get());