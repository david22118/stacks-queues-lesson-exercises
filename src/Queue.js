/* Write your class below */
class Queue  {
    constructor(){
        this.length= 0
        this.queue=[]
    }

    print (){
        console.log(this.queue)
    }
     
    isEmpty(){
           if(this.length!==0){
              return false
           }else return true
    }

    enqueue (x){
       this.queue[this.length]=x
       this.length++
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        else return this.queue[0]
           
   
    }
    dequeue(){
        const y = this.queue[0]
        delete (this.queue[0])
        this.length--
        return y
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true





//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Queue