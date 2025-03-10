// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (!verificar(nombre)) {
        return;
    }

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
    if (amigos.includes(nombre)) {
        alert("Este amigo ya fue agregado.");
        return false;
    }
    if (amigos.length >= 5) {
        alert("Ya tienes 5 amigos agregados.");
        return false;
    }
    return true;
}

function listarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>[[[ El amigo secreto es: <strong>${amigoSecreto}</strong> ]]]</h2>`;
}
