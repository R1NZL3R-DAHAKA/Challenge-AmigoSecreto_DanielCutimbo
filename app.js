// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array de amigos
let amigos = [];

// Función para agregar un amigo a la lista [Función llamada desde el HTML]   
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    // Se verifica
    if (!verificar(nombre)) {
        return;
    }
    // Si cumple con lo requerido (solo texto y no vacio) se agrega al array
    amigos.push(nombre);
    input.value = "";
    listarAmigos();
}

// Función para verificar si el nombre del amigo es válido
function verificar(nombre) {
    if (!nombre.trim()) {
        alert("Debes ingresar un nombre.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras.");
        return false;
    }
    if (amigos.includes(nombre)) {
        alert("Este amigo ya fue agregado.");
        return false;
    }
    // Por si acaso lo limito a 5 amigos
    if (amigos.length >= 5) {
        alert("Ya tienes 5 amigos agregados.");
        return false;
    }
    return true;
}

// Función para listar los amigos agregados (Cada que se agrega se limpia y se vuelve a llenar)
function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de actualizar 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteo de amigo secreto 
function sortearAmigo() {
    //Verificación del array antes de sortear
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    // Sortear amigo secreto por medio de un número aleatorio del Array
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSecreto);
}

// Mostrar el resultado del sorteo (Esta simple lo sé :c) Mi fuerte no es frontend
function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>[[[ El amigo secreto es: <strong>${amigoSecreto}</strong> ]]]</h2>`;
}
