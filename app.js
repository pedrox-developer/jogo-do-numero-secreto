//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do úmero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";


let listaDeNumerosAleatorio = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNumeroNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function textoDeExibicao() {
  exibirNumeroNaTela("h1", "Jogo do Numero Secreto");
  exibirNumeroNaTela("p", "Escolha um número entre 1 e 10");
};
  textoDeExibicao()

function verificarChute() {
  let chute = document.querySelector("input").value
  if (chute == numeroSecreto) {
    exibirNumeroNaTela("h1", "Acertou!")
    let palavraTentetiva = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTexto = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentetiva}!`
    exibirNumeroNaTela("p", mensagemTexto )
    document.getElementById("reiniciar").removeAttribute("disabled");

  } else {
    if (chute > numeroSecreto) {
      exibirNumeroNaTela("p", "o número é menor");
    } else {
      exibirNumeroNaTela("p", "O número é maior");
    }
    tentativas++;
    limparCampos()
  }
  
};

function numeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1)
    let listaDeQuantidadeDeElementos = listaDeNumerosAleatorio.length;
    if (listaDeQuantidadeDeElementos == numeroLimite) {
      listaDeNumerosAleatorio = [];
    }

    if (listaDeNumerosAleatorio.includes(numeroSorteado)) {
      return numeroAleatorio()
    } else {
      listaDeNumerosAleatorio.push(numeroSorteado)
      console.log(listaDeNumerosAleatorio)
      return numeroSorteado
    }
}

function limparCampos() {
  chute = document.querySelector("input");
  chute.value = "";
}

function criarNovoJogo() {
  
  numeroSecreto = numeroAleatorio ()
  verificarChute()
  tentativas = 1;
  limparCampos()
  textoDeExibicao()
}


/*
praticar
function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}
let resultado = calcularMedia(2, 4, 6, 8)
console.log(resultado)
*/


/*
//QUESTAO 1
  
   function exibir(){
    console.log("Olá mundo")
   }
   exibir()

function verificarNome(nome){
    console.log(`Olá, ${nome}`)
}
verificarNome("Pedro")

QUESTAO 2

let numero = 3;
function dobroDoNumero(numero){
    let dobro = numero * 2
    console.log(dobro)
}
dobroDoNumero(numero)

QUESTAO 3   

let num1 = 5;
let num2 = 6;
let num3 = 9;

function mediaDosNumeros(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 2
    console.log(media)
}
mediaDosNumeros(num1, num2, num3)

QUESTAO 4

let num1 = 8;
let num2 = 7;
function numeroMaior(num1, num2) {
   let maior = num1 > num2 ? "O número 1 é maior que número 2" : "O número 2 é maior que o número 1"
   console.log(maior)
}
numeroMaior(num1, num2)

QUESTAO 5

let numero = 5;
function aoQuadrado(numero) {
    let dobro = numero * numero
    console.log(dobro)
}
aoQuadrado(numero)
*/

/*
exemplo origianl
1
function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();

2
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");

3
function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

4
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);

5
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

6
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
*/