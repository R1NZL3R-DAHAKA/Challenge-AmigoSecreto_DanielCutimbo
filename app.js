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
    
}

function listarAmigos() {
    
}

function sortearAmigo() {
    
}

function mostrarResultado(amigoSecreto) {
    
}
