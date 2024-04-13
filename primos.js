function verificarPrimo() {
    let num = parseInt(prompt("ingrese el numero:"));
  
    function esprimo(n) {
      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    if (esprimo(num)) {
      alert("el numero es primo.");
      return true;
    } else {
      alert("El numero no es primo.");
      return false;
    }
  }
    verificarPrimo();