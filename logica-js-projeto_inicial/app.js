alert('Boas-vindas ao jogo do número secreto!');

let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');

if(numeroSecreto == chute) {
  alert(`Você acertou! O número secreto era ${numeroSecreto}!`)
}
else {
  alert(`Você errou :( O número secreto era ${numeroSecreto}.`);  
}