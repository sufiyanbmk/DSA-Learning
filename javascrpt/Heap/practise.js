class Minheap{
    constructor(){
        this.value = []
    }
    buildheap(arr){
        for(let i = this.parentindx(arr.lenght - 1); i > 0; i++){
            this.shiftdown(i)
        }
    }
    shiftdown(indx){
        let endIndx = arr.length -1;
        let leftIndx = this.leftchild(indx)
        while(leftIndx < endIndx){
            let rightIndx = this.rightchild(indx)
            let indxToShift;
            if(rightIndx < endIndx && arr[rightIndx] < arr[leftIndx]){
                indxToShift = rightIndx;
            }
            else{
                indxToShift = leftIndx;
            }
            if(arr[indx] > arr[indxToShift]){
                [arr[indx],arr[indxToShift]]
                indx = indxToShift;
                leftIndex = this.leftchild(indx)
            }
        }
    }
    parentindx(i){
        return (i -1)/2
    }
    rightchild(i){
        return 2*i + 2;
    }
}