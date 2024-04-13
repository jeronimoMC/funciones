function MCD(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ambos numeros deben ser enteros"
    }

    a = Math.abs (a);
    b = Math.abs (b);
    while (b /= 0){
        const temp = b;
        b = a % b;
        a = temp
    }
    return a;
}
console.log(MCD(24, 18))
console.log(MCD(25, 5))
console.log(MCD(7, 3))
console.log(MCD(3.5, 2))