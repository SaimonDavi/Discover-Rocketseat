class Stack {
    constructor(){
        this.data = [];
        this.top = -1;
    }

    push(value){
        this.top++;
        this.data[this.top] = value;
        return this.data;
    }

    pop(){
        if(this.top < 0 ) return undefined;
        const poppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return poppedTop;
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined;
    }
}

const stack = new Stack();

//adicionando
stack.push('item 1');
stack.push('item 2');
console.log(stack.push('item 3'));

console.log(stack.peek());

//removendo
stack.pop();
console.log(stack.pop());

console.log(stack.pop());