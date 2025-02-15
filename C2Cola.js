class Cola {
    constructor(tamanoMaximo) {
        this.items = [];
        this.tamanoMaximo = tamanoMaximo;
    }

    crearCola() {
        this.items = [];
    }

    insertar(elemento) {
        if (this.colaLlena()) {
            return "La cola está llena";
        }
        this.items.push(elemento);
    }

    quitar() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    colaVacia() {
        return this.items.length === 0;
    }

    colaLlena() {
        return this.items.length >= this.tamanoMaximo;
    }

    frente() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    tamanoCola() {
        return this.items.length;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
let miCola = new Cola(3); // Cola con un tamaño máximo de 3 elementos
miCola.crearCola();
miCola.insertar("Cliente 1");
miCola.insertar("Cliente 2");
miCola.insertar("Cliente 3");
miCola.mostrar(); // ["Cliente 1", "Cliente 2", "Cliente 3"]
console.log("Atendiendo", miCola.quitar()); // Cliente 1
console.log("Siguiente en la fila", miCola.frente()); // Cliente 2
console.log("¿La cola está vacía?", miCola.colaVacia()); // false
console.log("¿La cola está llena?", miCola.colaLlena()); // false
console.log("Tamaño de la cola", miCola.tamanoCola()); // 2










/*

class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "la cola esta vacia";
        }
        return this.items.shift();
    }

    frente() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
let miCola = new Cola();
miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
miCola.mostrar(); // ["Cliente 1", "Cliente 2", "Cliente 3"]
console.log("atendiendo", miCola.dequeue()); // Cliente 1
console.log("Siguiente en la fila", miCola.frente()); // Cliente 2 */


