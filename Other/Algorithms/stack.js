
/**
 * Stack - FILO
 *  - push -> insert into stack
 *  - pop -> take out from stack
 *  - peek -> check value
 *  - length -> get length of stack
 */

 // JavaScript Array already contains all above methods, hence can use as a stack.
 
 // Below is the programatic way of implementing Stack with JavaScript

 class Stack {
     constructor() {
         this.stack = [];
         this.count = 0;
     }

     push = (element) => {
        this.stack[this.count] = element;
        this.count += 1;
        return this.count -1;
     }

     pop = () => {
         if(this.count === 0) return undefined;
         const value = this.stack[this.count-1];
         this.stack.length = this.count -1;
         this.count -= 1;
         return value;
     }

     peek = () => {
         return this.stack[this.count -1]
     }

     isEmpty = () => {
         return this.count === 0 ? true : false;
     }

     size = () => {
         return this.count;
     }

     clear = () => {
         this.count = 0;
         this.stack = [];
         return this.stack;
     }
 }

const myStack = new Stack();
console.log('myStack isEmpty: ', myStack.isEmpty());
console.log('myStack size: ', myStack.size());
myStack.push(100);
myStack.push(150);
console.log('myStack: ', myStack.stack);
console.log('myStack size: ', myStack.size());
console.log('myStack isEmpty: ', myStack.isEmpty());
console.log('myStack peek: ', myStack.peek())
console.log('myStack pop: ', myStack.pop());
console.log('myStack: ', myStack.stack);
console.log('myStack clear: ', myStack.clear());
console.log('myStack: ', myStack.stack);