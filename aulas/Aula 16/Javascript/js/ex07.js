var nome, idade, cpf

nome=prompt("Qual o seu nome?")
idade=prompt("Qual sua idade?")
if(idade>=18){
cpf=prompt("Qual seu cpf?")
alert("Bem vindo "+nome+"! você tem "+idade+" anos, seu cpf é: "+cpf)
}
else{
alert("Bem vindo "+nome+"! você tem "+idade+" anos, você é menor de idade.")
}