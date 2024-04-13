function Potencia(base, exponente) {
    if (!Number.isInteger(base) || !Number.isInteger(exponente)) {
        return "los numeros deben ser enteros"
    }
    if (exponente == 0 ) {
        return 1;
    }
    if (base == 0 && exponente < 0) {
        return "con estos numeros no se podra realizar la operacion"
    }
    let resultado = 1
    for (let i = 0; i < Math.abs(exponente); i++) {
        resultado *= base;
        
    }
    return exponente < 0 ? 1 / resultado : resultado;
}
console.log(Potencia(4, 5))
console.log(Potencia(1, 0))
console.log(Potencia(0, 7))
console.log(Potencia(3.5, 3))
console.log(Potencia(7, -5))