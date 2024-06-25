let numAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
// console.log(numAleatorio);

exibirMensagemInicial();

function exibirTexto(seletor, texto) {
  let campo = document.querySelector(seletor);
  campo.innerText = texto;
  
}

function exibirMensagemInicial() {
  exibirTexto('h1', 'Jogo do número secreto');
  exibirTexto('p', 'Escolha um número entre 1 e 10');  
}

function gerarNumeroAleatorio() {
  const numAleatorio = parseInt(Math.random() * 10 + 1);
  return numAleatorio;
}


function verificarChute() {
  let chute = document.querySelector('input').value;
  if(chute == numAleatorio) {
    exibirTexto('h1', 'Parabéns!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else {
    if(chute > numAleatorio) {
      exibirTexto('p', 'O número secreto é menor');
    }
    else {
      exibirTexto('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }

}


function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}


function reiniciarJogo() {
  numAleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
