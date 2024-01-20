alert("Seja muito bem vindo ao nosso GAME! 🎮");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Você errou! 😢 O número secreto é menor que o seu chute.`);
        } else {
            alert(`Você errou! 😢 O número secreto é maior que o seu chute.`);
        }
    }
    tentativas++
}
  
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`PARABÉNS! 🥳 Você acertou o número secreto que é ${numeroSecreto}. Com ${tentativas} ${palavraTentativa}. 🥳🥳🥳🥳🥳🥳🥳🥳`);

