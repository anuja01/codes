/** 
 * Queue - FIFO
 * 
*/

class Queue {
    constructor() {
        this.queue = [];
        this.count = 0;
    }

    push = (element) => {
        this.queue[this.count] = element;
        this.count += 1;
    }

    pop = () => {
        if(this.count === 0) return 'no value'
        const value = this.queue[0];
        const tempQueue = []
        for (let i = 1; i < this.queue.length; i++) {
            tempQueue[i-1] = this.queue[i]    
        }
        this.queue = tempQueue;
        this.count -= 1;
        return value;
    }
    // NOTE: pop in a better way https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al 

    peek = () => {
        if(this.count === 0) return 'no value'
        return this.queue[0];
    }
}

const myQueue = new Queue();

console.log('myQueue: ', myQueue.queue);
console.log('push 100: ');
myQueue.push(100);
console.log('push 150: ');
myQueue.push(150);
console.log('myQueue: ', myQueue.queue)
console.log('myQueue pop: ', myQueue.pop());
console.log('myQueue: ', myQueue.queue)
console.log('myQueue pop: ', myQueue.pop());
console.log('myQueue: ', myQueue.queue)
console.log('myQueue pop: ', myQueue.pop());
console.log('myQueue: ', myQueue.queue)
console.log('myQueue peek: ', myQueue.peek())
console.log('push 100: ');
myQueue.push(100);
console.log('push 150: ');
myQueue.push(150);
console.log('myQueue: ', myQueue.queue)
console.log('myQueue peek: ', myQueue.peek())
console.log('myQueue pop: ', myQueue.pop());
console.log('myQueue: ', myQueue.queue)
console.log('myQueue peek: ', myQueue.peek())


// using Javascript array as Queue
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2