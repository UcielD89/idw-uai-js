// Functions
// a)
/* function sumar(n1, n2) {
  return n1 + n2;
} */

// var result = sumar(2, 2);
// console.log(result);

// b)
/* function sumar(n1, n2) {
  if (typeof n1 != "number") {
    alert("El primer parametro no es un numero");
    return NaN;
  }
  if (typeof n2 != "number") {
    alert("El segundo parametro no es un numero");
    return NaN;
  }
  return n1 + n2;
} */
// var result = sumar(2, 2);
// console.log(result);

// c)
/* function validate_number(param) {
  return typeof param === "number" ? true : false;
} */

// console.log(validate_number("hola"));

// d)
/* function sumar(n1, n2) {
  if (!Number.isInteger(n1)) {
    // Si no es entero, mostramos la alerta
    alert('Error: El número ' + n1 + ' tiene decimales. Se redondeará.');
    // Reasignamos n1 a su valor redondeado
    n1 = Math.round(n1);
  }
  if (!Number.isInteger(n2)) {
    // Si no es entero, mostramos la alerta
    alert('Error: El número ' + n2 + ' tiene decimales. Se redondeará.');
    // Reasignamos n2 a su valor redondeado
    n2 = Math.round(n2);
  }
  return n1 + n2;
} */

// var result = sumar(2, 2);
// console.log(result);

// e)
function sumar(n1, n2) {
  var nro1 = validate_params(n1);
  var nro2 = validate_params(n2);
  return nro1 + nro2;
}

function validate_params(param) {
  if (!Number.isInteger(param)) {
    alert('Error: El número ' + param + ' tiene decimales. Se redondeará.');
    // Devuelve el número redondeado
    return Math.round(param);
  }
  return param;
}

var result = sumar(2.2, 2);
console.log(result);