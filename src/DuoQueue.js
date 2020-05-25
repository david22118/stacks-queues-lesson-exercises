/* Write your class below */
class Queue2 {
    constructor(){
        this.length= 0
        this.queue2=[]
    }

    print (){
        return (this.queue2)
    }
     
    isEmpty(){
           if(this.length!==0){
              return false
           }else return true
    }

    enqueue (x){
       this.queue2[this.length]=x
       this.length++
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        else return this.queue2[0]
           
   
    }
    dequeue(){
        const y = this.queue2[0]
        this.queue2.shift()
        this.length--
        return y
    }
}



class Queue1 {
    constructor(){
        this.length= 0
        this.queue1=[]
    }

    print (){
        return(this.queue1)
    }
     
    isEmpty(){
           if(this.length!==0){
              return false
           }else return true
    }

    enqueue (x){
       this.queue1[this.length]=x
       this.length++
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        else return this.queue1[0]
           
   
    }
    dequeue(){
        const y = this.queue1[0]
        delete this.queue1.shift()
          this.length--
        return y
    }
}


class DuoQueue {
    constructor(q1,q2){
        this.Queue1=q1,
        this.Queue2=q2
    }

    print(){
        console.log(this.Queue1,this.Queue2)
    }
    enqueue(person, qNum){
        if(qNum==1){
            q1.enqueue(person)
        }
         else if(qNum===2){
            q2.enqueue(person)
        }
       
    }
    dequeue(qNum){
        if(qNum==1){
       q1.dequeue()
    }
    else if (qNum==2){
        q2.dequeue()
    }
}

getLongestQueue(){
    if(q1.length>q2.length){
         return q1.print()
    }
       else return (q2.print())
}
getShortestQueue(){
    if(q1.length>q2.length){
        return q2.queue2
    }
    else return q1.queue1
} 
balanceQueues(){
    while((q1.length-q2.length)>1){
        const x = q1.peek()
        q2.enqueue(x)
        q1.dequeue()
    }

    while((q2.length-q1.length)>1){
        const y = q2.peek()
        q1.enqueue(y)
        q2.dequeue()
    }
}


}

const q2 = new Queue2()
const q1 = new Queue1()
let dq = new DuoQueue(q1,q2)

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }
//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }




//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = DuoQueue