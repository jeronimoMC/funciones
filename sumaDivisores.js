function sumaDvisores(num) {
    if (!Number.isInteger(num)) {
        return "el valor debe ser un numero entero"
    }
    num = Math.abs(num);
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            suma += i;
        }
        
    }
    return suma;
}
console.log(sumaDvisores(12))
console.log(sumaDvisores(-6))
console.log(sumaDvisores(1))
console.log(sumaDvisores(4.552))