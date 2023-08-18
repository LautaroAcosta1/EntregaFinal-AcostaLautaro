document.addEventListener("DOMContentLoaded", function() {
    let botonIniciar = document.getElementById("botonIniciarSesion");
    botonIniciar.addEventListener("click", iniciarSesion);
});

// Se toman los datos ingresados por la persona, se controla de que los datos pertenezcan a una cuenta creada y se 
// inicia sesion.
function iniciarSesion() {
    const listaUsuarios = listaUsuariosDeLocalStorage();
    const usuarioIngresado = document.getElementById("usuarioIngresado").value;
    const claveIngresada = document.getElementById("claveIngresada").value;
    const datosCorrectos = listaUsuarios.find((user) => user.usuario === usuarioIngresado && user.clave === claveIngresada);

    if (datosCorrectos) {
        window.location.href = "../inicio/feed.html";
        alert("")
    } else {
        Swal.fire(
            'Debes completar el inicio de sesion.',
            '',
            'error'
        )
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let botonCrear = document.getElementById("botonCrearCuenta");
    botonCrear.addEventListener("click", crearCuenta);
});

// Se toman los datos ingresados de la persona, se controla que el nombre de usuario no exista y se crea la cuenta.
function crearCuenta() {
    const listaUsuarios = listaUsuariosDeLocalStorage();
    const usuarioNuevoIngresado = document.getElementById("usuarioNuevoIngresado").value;
    const emailIngresado = document.getElementById("emailIngresado").value;
    const claveNuevaIngresada = document.getElementById("claveNuevaIngresada").value;
    let nuevoUsuario = {usuario: usuarioNuevoIngresado, clave: claveNuevaIngresada, email: emailIngresado};
    let usuarioExistente = listaUsuarios.some((user) => user.usuario === usuarioNuevoIngresado || user.email === emailIngresado);

    if (usuarioExistente) {
        Swal.fire(
            'El usuario ya existe..',
            '',
            'error'
        )
    } else {
        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        window.location.href = "index.html";
        Swal.fire(
            'Se ha creado con exito.',
            '',
            'success'
        );
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let botonEnviar = document.getElementById("botonEnviarCodigo");
    botonEnviar.addEventListener("click", enviarCodigo);
});

// Se verifica que el email ingresado por la persona sea correcto para enviar un mail.
function enviarCodigo() {
    const listaUsuarios = listaUsuariosDeLocalStorage();
    const emailIngresado = document.getElementById("emailIngresado").value;
    let emailCorrecto = listaUsuarios.some((user) => user.email === emailIngresado);
    if (emailCorrecto) {
        // Se envia un mail en el cual pueda cambiar cambiar su contraseña.
        Swal.fire(
            'Verifique su mail y siga los pasos dados.',
            '',
            'success'
        );
    } else {
        Swal.fire(
            'Email incorrecto.',
            '',
            'error'
        );
    }
}



// Se obtienen los usuarios almacenados en el localStorage llamado "listaUsuarios".
function listaUsuariosDeLocalStorage() {
    const usuariosJSON = localStorage.getItem("listaUsuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}


















