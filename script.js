function tabla() {
  let numero = prompt(
    "Ingrese un número para mostrar su tabla de multiplicación: "
  );
  numero = Number(numero);
  if (!Number.isNaN(numero) && Number.isInteger(numero)) {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = ""; // Limpiar contenido anterior
    for (let i = 0; i <= 10; i++) {
      let resultado = numero * i;
      tabla.innerHTML += "<br>" + numero + " x " + i + " = " + resultado;
    }
  } else {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "El número ingresado no es entero.";
  }
}
