const denominations = [50000,20000,10000,5000, 2000, 1000];

function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}   
/*
esta primer parte asigna las denominaciones del los billetes.
ya en la funcion le pregunta al cliente cual es el monto que desea retirar.
*/

function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}
/*
aqui calcula los billetes que necesita sacar para dar el retiro
 con el monto anteriormente asignado
 */

function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}
/*
esto verifica la informacion anteriror y pregunta que si "amount" es mayor que 0
y la otra parte verfica si "amount" es un numero entero 
el % es un operador que devuelve el resto de una operacion de division 
es el resto de dividir por 1 es 0.
por lo tanto si estas dos condiciones se cumplen dan paso a la siguiente.
*/
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }
/*
este parte es un verificador interactivo con el cliente 
la funcion de este codigo es comparando 2 funciones pasadas 
para verificar si el monto que desea retirar es valido 
si esta funcion retorna false salta la alerta siguiente 
y vuelve al inicio.
*/
  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}
/*
este codigo calcula mejor el numero de billetes necesarios para completar un retiro 
muestra un alerta con el monto del retiro y el numero de billetes necesarios 
para cada denominación disponible en el cajero auntomatico 
*/

ATMTransaction();
