

let login = "ADMINISTRADOR";
let password = "12345678";
let loginCorrecto = "admin";
let passwordCorrecto = 1234;

if ((login != "admin")) {
  alert("Usuario no encontrado. Acceso denegado");
} else {
  if (password == 1234) {
    alert("Login y Password correcto. Acceso permitido");
  } else {
    alert("Password incorrecto. Vuelva a intentarlo");
  }
}






/* Podemos darle la vuelta a la lógica

if (login == "admin") {
  if (password == 1234) {
    alert("Login y Password correcto. Acceso permitido");
  } else {
    alert("Password incorrecto. Vuelva a intentarlo");
  }
} else {
  alert("Usuario no encontrado. Acceso denegado");
}

*/
