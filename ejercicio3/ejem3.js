
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

/*
genera dos valiables sala1 sala2, cada uno con una
lonjitud de 10 y llenos de valores falsos 
esto se hace utilizando el array y el metodo fill
*/

function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}
/*
este muestra la disponibilidad de los asientos,
la funcion utiliza el "map" para recoger cada elemento de sala1 y 2 
y si el elemento es true el asiento esta ocupado y lo marca con [x]
pero si es false esta libre y lo marca con []
*/
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}
/*
en esta parte el sistema interactua con el usuario, pregunta la sala y el asiento
en el if ya confirma que sala eligio y sabe a donde direccionarlo
el usuario al elegir asiento se marca como reservado y toma el valor de true
de igual forma para la otra sala, por ultimo si no se cumple alguno de los requisitos salta un alert
*/

function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}
/*
la funcion muestra que asientos estan libres en una de las salas
filtrando los asientos ya reservados, saltan varias alertas indicando que asientos estan libres
una de disfrutar la peli y por ultimo la del error que se da cuando todos los asientos estan llenos o el que escogio 
ya esta ocupado.
*/

while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
/*
es un bucle indeterminado hasta que el usuario elija la opcion salir,
dentro del bucle se muestran 4 opciones ver disponibilidad de asientos, 
reservar asientos, ver ocupacion en la sala y salir.
luego se utilisa el switch para determinar los casos anteriormente llamados 
y por ultimo la alerta que seria el error.
*/