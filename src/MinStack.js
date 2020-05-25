/* Write your class below */
class MinStack {
    constructor () {
        this.min
        this.length=0
        this.stack= []
    }
    print (){
        console.log(this.stack,this.min)
    }
    push(x){
        if(this.isEmpty()){
            this.min=x 
        }else if(x<this.min){
              this.min=x}
             
        this.stack[this.length]=x
        this.length++
    }

    getMin(){
         if(this.length==1){
             this.min= this.peek()
         } else if (this.isEmpty()){
             return null
         }
         return this.min
    }

    isEmpty(){
        if(this.length !== 0){
            return false
        }else return true

    }


    peek(){
        if (this.isEmpty()){
            return null
        }
        return this.stack[this.length-1]
    }


    pop(){
       const y = this.stack[this.length-1]
        delete (this.stack[this.length-1])
        this.length--
    return y
    }
}


let ms = new MinStack()
ms.push(13)
ms.push(12)
ms.push(11)
console.log(ms.getMin())    //12
ms.pop()

console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
ms.print()
console.log(ms.getMin())    //19




//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = MinStack