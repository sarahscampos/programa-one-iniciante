alert('Boas-vindas ao jogo do número secreto!');

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //parseInt pega a parte inteira do número
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  if(numeroSecreto == chute) {
    break;
  }
  else {
    if(numeroSecreto > chute) {
      alert(`O número secreto é maior que ${chute}`);
    }
    else {
      alert(`O número secreto é menor que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número secreto era ${numeroSecreto}! Você precisou de ${tentativas} ${palavraTentativa}.`)


