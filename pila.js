class pila {
    constructor () {
        this.item = [];
    }

    //agregar elemento a la pila
    push(element) {
        this.item.push(element);
    }

    //eliminar elemento de la pila
    pop() {
        if (this.item.length === 0) {
            return "No hay elementos en la pila";
        }
        return this.item.pop();
    }

    //retorna la cima
    peek() {
        return this.item.length === 0;
    }

    isEmpty() {
        return this.item.length === 0;
    }   

    mosntrar() {
        console.log(this.item);
    }

   
}

let miniPila = new pila();
miniPila.push("A");
miniPila.push("B");
miniPila.push("C");
miniPila.mosntrar();
console.log("eliminar elemento", miniPila.pop());
miniPila.mosntrar();
console.log("cima", miniPila.peek());
console.log("¿esta vacia?", miniPila.isEmpty());
miniPila.pop();
miniPila.pop();
miniPila
console.log("¿esta vacia?", miniPila.isEmpty());