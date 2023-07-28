// ------------------------------ funciones ------------------------------

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
        alert("Inicio exitoso. ¡Bienvenido" + " " + usuarioIngresado + "!")
    } else {
        alert("Usuario o contraseña incorrecta. Vuelva a intentarlo.")
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
        alert("El nombre de usuario o email ingresado ya existe. Vuelva a intentarlo.")
    } else {
        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        alert("Se ha registrado con exito.");
    }
}



// Se obtienen los usuarios almacenados en el localStorage llamado "listaUsuarios".
function listaUsuariosDeLocalStorage() {
    const usuariosJSON = localStorage.getItem("listaUsuarios");
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}









