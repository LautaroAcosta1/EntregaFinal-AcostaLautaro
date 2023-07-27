// ------------------------------ simulador de base de datos ------------------------------

let listaUsuarios = [
    {usuario: "Lautaro01", clave: "12345678", email: "lauty.acosta212@gmail.com"},
    {usuario: "pepe2002", clave: "p1p2002", email: "pepeortega302@gmail.com"},
    {usuario: "GuilleGzlz", clave: "876345", email: "guillermo_gonzalez009@hotmail.com"},
];




// ------------------------------ funciones ------------------------------

document.addEventListener("DOMContentLoaded", function() {
    let botonIniciar = document.getElementById("botonIniciarSesion");
    botonIniciar.addEventListener("click", iniciarSesion);
});

function iniciarSesion() {
    const usuarioIngresado = document.getElementById("usuarioIngresado").value;
    const claveIngresada = document.getElementById("claveIngresada").value;

    const datosCorrectos = listaUsuarios.find((user) => user.usuario === usuarioIngresado && user.clave === claveIngresada);

    if (datosCorrectos) {
        alert("inicio exitoso.")
    } else {
        alert("inicio invalido.")
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let botonCrear = document.getElementById("botonCrearCuenta");
    botonCrear.addEventListener("click", crearCuenta);
});

function crearCuenta() {
    const usuarioNuevoIngresado = document.getElementById("usuarioNuevoIngresado").value;
    const emailIngresado = document.getElementById("emailIngresado").value;
    const claveNuevaIngresada = document.getElementById("claveNuevaIngresada").value;

    let nuevoUsuario = {usuario: usuarioNuevoIngresado, clave: claveNuevaIngresada, email: emailIngresado};

    listaUsuarios.push(nuevoUsuario);
    console.log(listaUsuarios)
}


