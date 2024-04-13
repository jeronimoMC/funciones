function sumaDigitos(num)  {
    const numString = Math.abs(num).toString();
    let suma = 0;
    for (let i = 0; i < numString.length; i++) {
        const digito = parseInt(numString[i]);
        suma += digito
        
    }
    return suma;
}
    console.log(sumaDigitos(num = 12345)) 
    console.log(sumaDigitos(num = -67))
    console.log(sumaDigitos(num = 0))
