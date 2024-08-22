function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", (event) => {
 document.getElementById("regBtn").addEventListener("click", () => {
    event.preventDefault(); //detiene la acción predeterminada de enviar el formulario.

let nombre = document.getElementById("nombre").value.trim();
let apellido = document.getElementById("apellido").value.trim();
let email = document.getElementById("email").value.trim();
let password1 = document.getElementById("password1").value;
let password2 = document.getElementById("password2").value;
let checkbox = document.getElementById("terminos").checked;

// Verifica que ningún campo esté vacío
if (!nombre || !apellido || !email || !password1 || !password2) {
    showAlertError();
    return;
}

//Verifica si la longitud de la contraseña es menor de 6 caracteres y si es menor se mostra el "showAlertError"
if (password1.length< 6){
    showAlertError();
    return;
}

//Si no son iguales, la condición será true y se mostra el "showAlertError"
if (password1 !== password2){
    showAlertError();
    return;
}
// Verifica si el checkbox de aceptación de términos está marcado y si es no se marco la checkbox se mostra el "showAlertError"
if (!checkbox) {
    showAlertError();
    return;
}
//Si todas las validaciones pasan sin errores, se muestra el "showAlertSuccess"
showAlertSuccess();

});
    });
