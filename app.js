// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    document.getElementById("listaAmigos").innerText = nombre;

    if (nombre.trim() !== "") { // Verifica que no esté vacío
        nombres.push(nombre); // Agrega el nombre al arreglo
        actualizarLista(); // Actualiza la lista en la pantalla
        document.getElementById("amigo").value = ""; // Limpia el input
    } else {
        alert("Por favor, ingresa un nombre.");
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    nombres.forEach(function(nombre) {
        let li = document.createElement("li"); // Crea un elemento <li>
        li.innerText = nombre; // Asigna el texto
        lista.appendChild(li); // Agrega <li> a la lista
    });
}

function sortearAmigo() {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * nombres.length); // Número aleatorio entre 0 y nombres.length - 1
        let nombreSeleccionado = nombres[indiceAleatorio]; // Obtiene el nombre del arreglo

        document.getElementById("resultado").innerText = nombreSeleccionado; // Muestra el nombre seleccionado
}