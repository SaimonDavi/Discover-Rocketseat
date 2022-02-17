class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila`);
    }

    dequeue() {
        const item = this.data.shift();
        console.log(`${item} saiu da fila`);
    }
}

const fila = new Queue();

//adicionando
fila.enqueue('Primeiro');
fila.enqueue('Segundo');
fila.enqueue('Terceiro');

//removendo
fila.dequeue();
fila.dequeue();
fila.dequeue();