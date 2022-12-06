var dia

dia=parseInt(prompt("Digite um numero de 1 a 7: "))

switch (dia) {
    case 1:
        alert("O dia é Domingo")
        break;
    case 2:
        alert("O dia é segunda-feira")
        break;
    case 3:
        alert("O dia é terça-feira")
        break;
    case 4:
         alert("O dia é quarta-feira")
        break;
    case 5:
        alert("O dia é quinta-feira")
        break;
    case 6:
        alert("O dia é sexta-feira")
        break;
    case 7:
        alert("O dia é sábado")
        break;
    default:
        alert("Opção inválida, digite outro número")
        break;
}