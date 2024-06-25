const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "são 6 da manhã e o despertador tocou e você levantou, você vai:",
        alternativas: [
            "tomar banho",
            "escovar os dentes"
        ]
    },
    {
        enunciado: "ótima escolha, agora você deseja:",
        alternativas: [
            "se arrumar para escola",
            "tomar café da manhã"
        ]
    },
    {
        enunciado: "você está pronto para ir à escola, você vai:",
        alternativas: [
            "levar algo para comer na escola",
            "comprar algo na cantina da escola"
        ]
    },
    {
        enunciado: "você chegou à escola, você vai:",
        alternativas: [
            "ir para sala",
            "ir encher a garafa"
        ]
    },
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();




