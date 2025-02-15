function esBalanceo(expresion) { 
    let pila = [];
    let pares = {
        ")": "(",
        "]": "[",
        "}": "{", 
        
    }; // Diccionario de pares
    
    for (let caracter of expresion) { 
        if (["(", "[", "{"].includes(caracter)) {
            pila.push(caracter);
        } else if ([")", "]", "}"].includes(caracter)) {
            if (pila.length === 0 || pila.pop() !== pares[caracter]) {
                return false;
            }
        }
    }
    return pila.length === 0;
}

// Pruebas
console.log(esBalanceo("{[()]}"));  // true
console.log(esBalanceo("{[(])}"));  // false
console.log(esBalanceo("((()))"));  // true

