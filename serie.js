function generarFibonacci (n) {
    // verifica si el numero es valido 
    if (n <= 0 || !Number.isInteger(n)){
        return "por favor, ingrese un numero entero positivo.";
    }
    
    let resultado = "";
    let a = 0, b = 1 
// imprime los dos primeros numeros de la serie
resultado += `${a}, ${b}`;

//genera los numeros de la serie utilizando un ciclo 

    for (let i = 2; i < n; i++){
        const siguiente = a + b;
        resultado += `${siguiente}`
        a = b;
        b = siguiente;

    }
    // devolver la cadena con la serie de fibonacci 
    return resultado
}
console.log(generarFibonacci(8))// "0 1 1 2 3 5 8 13"
console.log(generarFibonacci(0))// "porfavor ingrese un numero entero positivo "
console.log(generarFibonacci(-5))// "porfavor ingrese un numero entero positivo "

