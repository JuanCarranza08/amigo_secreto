// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    document.getElementById("listaAmigos").innerText = nombre;

    if (nombre.trim() !== "") { 
        nombres.push(nombre); 
        actualizarLista(); 
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, ingresa un nombre.");
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    nombres.forEach(function(nombre) {
        let li = document.createElement("li");
        li.innerText = nombre; 
        lista.appendChild(li); 
    });
}

function sortearAmigo() {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * nombres.length); 
        let nombreSeleccionado = nombres[indiceAleatorio]; 

        document.getElementById("resultado").innerText = nombreSeleccionado; 
}
