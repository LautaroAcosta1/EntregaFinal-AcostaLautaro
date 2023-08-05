// Se ingresa al archivo .json y se recorre dicho archivo para verificar si el usuario que esta siendo buscado
// es existente. Si es asi, se ofrecen los datos para acceder a su perfil.
function buscarPerfil(usuario){
    let div = document.getElementById("mostrarPerfil")
    
    fetch("perfil.json")
        .then( (res) => res.json())
        .then( (data) => {
            let encontrado = false;
            for (const user of data) {
                if (user.usuario === usuario){
                    document.getElementById("busquedaIngresada").classList.add("valid");

                    const ul = document.createElement("ul")
                    ul.innerHTML = `<img src= "${user.imgPerfil}">
                                    <div class="datosUsuario">
                                        <h4>${user.nombre}</h4>
                                        <p>@${user.usuario}</p>
                                    </div>`
                    div.append(ul)
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                document.getElementById("busquedaIngresada").classList.add("valid");

                const p = document.createElement("p")
                p.innerHTML = `<p class="mensajeError">${"Este usuario no existe."}</p>`
                div.append(p)
            }
        })
}


document.addEventListener("DOMContentLoaded", function() {
    let botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", buscarUsuario);
});

// Se verifica que se haya ingresado el nombre de un usuario, si es asi, se llama a la funcion nombrada
// anteriormente. Si no, se pide que ingrese un usuario. 
function buscarUsuario() {
    const inputElement = document.getElementById("busquedaIngresada");
    const usuarioIngresado = inputElement.value;
    let div = document.getElementById("mostrarPerfil")

    if (usuarioIngresado.trim() !== "") {
        buscarPerfil(usuarioIngresado)
    } 
}


document.addEventListener("click", ocultarContenido);

// Se elimina el contenido de "mostrarPerfil" para seguir navegando.
function ocultarContenido() {
    document.getElementById("mostrarPerfil").innerHTML = ``;
    document.getElementById("busquedaIngresada").classList.remove("valid");
}