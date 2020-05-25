/* Write your class below */
class Stack {
    constructor () {
        this.length=0
        this.stack= []
    }
    print (){
        console.log(this.stack)
    }
    push(x){
        this.stack[this.length]=x
        this.length++
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




//You can paste the test code from the lesson below to test your solution
let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())  




/* Do not remove the exports below */
module.exports = Stack