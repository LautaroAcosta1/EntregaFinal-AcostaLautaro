// ------------------------------ NOTIFICACIONES ------------------------------

document.addEventListener("DOMContentLoaded", function() {
    let botonNoti = document.getElementById("botonNoti");
    botonNoti.addEventListener("click", notificaciones);
});

// Se crea un div con notificaciones de prueba.
function notificaciones() {
    let div = document.getElementById("notificaciones");

    const div2 = document.createElement("div");
    div.innerHTML =`<div class="notiFondo">
                        <div class="notificacionesDePrueba">
                            <img src="../img/duki.jpeg">
                            <p><b>duki.ssj</b> le ha dado Me gusta a tu publicación.</p>
                        </div>
                        <div class="notificacionesDePrueba">
                            <img src="../img/coscu.jpeg">
                            <p><b>coscu_10</b> ha solicitado seguirte.</p>
                        </div>
                        <div class="notificacionesDePrueba">
                            <img src="../img/maria.jpeg">
                            <p><b>maria.becerra</b> ha solicitado seguirte.</p>
                        </div>
                        <div class="notificacionesDePrueba">
                            <img src="../img/ibai.jpeg">
                            <p><b>ibai_llanos</b> le ha dado Me gusta a tu publicación.</p>
                        </div>
                        <div class="notificacionesDePrueba">
                            <img src="../img/messi2.jpeg">
                            <p><b>lionel.messi10</b> ha comentado tu publicación.</p>
                        </div>
                    </div>`
    div.append(div2);
}





// ------------------------------ BARRA DE BUSCADOR ------------------------------

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

                    const ul = document.createElement("ul");
                    ul.innerHTML = `<img src="${user.imgPerfil}">
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

    if (usuarioIngresado.trim() !== "") {
        buscarPerfil(usuarioIngresado)
    }
}


document.addEventListener("click", ocultarBuscador);

// Se elimina el contenido de "mostrarPerfil" para seguir navegando.
function ocultarBuscador() {
    document.getElementById("mostrarPerfil").innerHTML = ``;
    document.getElementById("busquedaIngresada").classList.remove("valid");
}





// ------------------------------ NOMBRE DE PERFIL ------------------------------

const usuarioIngresado = document.getElementById("usuarioIngresado");

console.log(usuarioIngresado)