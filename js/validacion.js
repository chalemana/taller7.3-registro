function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function formularioAceptado(event) {
    event.preventDefault(); //detiene la acción predeterminada de enviar el formulario.

let password1 = document.getElementById("password1").value;
let password2 = document.getElementById("password2").value;
let checkbox = document.getElementById("terminos").checked;

//Verifica si la longitud de la contraseña es menor de 6 caracteres y si es menor mostrara el "showAlertError"
if (password1.length> 6){
    showAlertError();
    return;
}

//Si no son iguales, la condición será true y mostrara el "showAlertError"
if (password1 !== password2) {
    showAlertError();
    return;
}

// Verifica si el checkbox de aceptación de términos está marcado y si es no se marco la checkbox mostrara el "showAlertError"
if (!checkbox) {
    showAlertError();
    return;
}

//
else{
    showAlertSuccess();
}

}