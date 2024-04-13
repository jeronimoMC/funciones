function palindromo(num) {
    if (!Number.isInteger(num)) {
        return "debe ser un numero entero"
    }
    const numString = Math.abs(num).toString();
    let numInvertido = ""
    for (let i = numString.length - 1; i >= 0 ; i--) {
        numInvertido += numString[i]
    }
    return numString == numInvertido
}
console.log(palindromo(12321))
console.log(palindromo(54765))
console.log(palindromo(-101))
console.log(palindromo(5.1213))