let numAleatorio = gerarNumeroAleatorio();
console.log(numAleatorio);

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function exibirTexto(seletor, texto) {
  let campo = document.querySelector(seletor);
  campo.innerText = texto;

}

function verificarChute() {
  let chute = document.querySelector('input').value;
  if(chute == numAleatorio) {
    console.log('Você acertou!!!');
  }
  else {
    console.log('Você errou :( Tente de novo');
  }

}

function gerarNumeroAleatorio() {
  const numAleatorio = parseInt(Math.random() * 10 + 1);
  return numAleatorio;
}
