//manipular console com comando de saída
console.log("digite o seu nome:")

//declarando variável pode mudar a qualquer momento
let nickname = " sei"

//unir mensagem fixa + variável(nome técnico "concatenar")
console.log("digite o seu nome" + nickname)

//constante não se muda nunca
const notificação ="Alerta: "

//concatenando notificação com mensagem
console.log (notificação + "NOVO POKÉMON NA REGIÃO")

let numero = "1"
console.log (numero==1) //== compara valor
console.log (numero===1) //compara valor e tipo
console.log (numero!=1) //== compara valor
console.log (numero!==1) //compara valor e tipo

let idade =18
let idade2 = 16
let comparar = idade > idade2 //comparando as variáveis pode ser com "menor" "maior ou igual" ou "maior ou menor"
console.log(comparar) //retorna comparação se colocar uma "!" antes de comparar, inverte o valor de true para false e vice versa


let vistoVerificado = true
console.log(idade >= 17 && (vistoVerificado === true) ) //comparando com mais de uma condição, poderia ser feito com || (OU)

for (let i=0;i<=10;i++) {// váriavel, condição, incremento
    console.log (i)
}

let quantidade = 0
do {
    console.log("\nvoce tem:"+quantidade)
    quantidade++
}while (quantidade <= 5) //do while, caso o do venha primeira, semore será executado o laço pelo menos uma vez

    
