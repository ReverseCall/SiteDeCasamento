const html = document.documentElement;

const temas = [
    "Azul",
    "Verde",
]

let temaAtual = 0

function trocarTema() {

    temaAtual++;

    if (temaAtual >= temas.length) {
        temaAtual = 0
    }

    html.dataset.theme = temas[temaAtual]
}