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
        window.location.href = "../feed.html";
        alert("Inicio exitoso. ¡Bienvenido" + " " + usuarioIngresado + "!");
    } else {
        alert("Usuario o contraseña incorrecta. Vuelva a intentarlo.");
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
        alert("El nombre de usuario o email ingresado ya existe. Vuelva a intentarlo.");
    } else {
        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        window.location.href = "index.html";
        alert("Se ha registrado con exito.");
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
        alert("Verifique su gmail y siga los pasos dados para recuperar su cuenta.");
    } else {
        alert("Email incorrecto. Vuelva a intentarlo.");
    }
}



// Se obtienen los usuarios almacenados en el localStorage llamado "listaUsuarios".
function listaUsuariosDeLocalStorage() {
    const usuariosJSON = localStorage.getItem("listaUsuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}









