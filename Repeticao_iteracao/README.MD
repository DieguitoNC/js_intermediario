# Repeticao e Iteracao
- Executa o codigo X vezes que eu solicitar
## While
- Executa enquanto a condicao for verdadeira
```
// While: Executa ate que a condicao seja verdadeira

  
  
  

let execute = true

  

while (execute) {

    let response = window.prompt("Deseja Continuar: 1(sim) 2(nao)")

  

    if (response === "2") {

        execute = false

    }

}

  
  

console.log("Segue o fluxo")
```

## Loop infinito
- quando executa para sempre
```
// Loop infinito

  

let value = true

  

while (value) {

    console.log("Executando while...")

}
```

## Loop do While
- DO WHILE: repete ate que a condicao especificada seja verdadeira. No entando, a instrucao sera executada pelo menos uma vez antes da condicao ser verificada
```

  

let value = 0

  

do {

    value++

    console.log(value)

} while (value<10)

  

console.log("Segue fluxo...")
```

## Loop for
For reppete ate que a condicao especificada seja falsa
- Variavel de controle
- Condicao
- Incremento ou decremento da variavel de controle

```
/*for (step = 0; step<10; step++) {

    console.log(step)

}

  

Exemplo de tabuada

console.log(`### TABUADA ###`)

console.log(`7x0 = ${7*0}`)

console.log(`7x1 = ${7*1}`)

console.log(`7x2 = ${7*2}`)

console.log(`7x3 = ${7*3}`)

console.log(`7x4 = ${7*4}`)

console.log(`7x5 = ${7*5}`)

console.log(`7x6 = ${7*6}`)

console.log(`7x7 = ${7*7}`)

console.log(`7x8 = ${7*8}`)

console.log(`7x9 = ${7*9}`)

console.log(`7x10 = ${7*10}`)

*/

  

let number = 7

for (step = 0; step <=10; step++) {

    console.log(`${number} x ${step} = ${number*step}`)

}
```
## For in
- Executa iteracoes a partir de um objeto e percorre as propriedades
```
let person = {

    name: "Diego",

    surname:"Catalan",

    email: "diego@email.com",

}

  
  

for (let property in person) {

  

    //Exibe o nome da propriedade

    console.log(property)

  

    //Exibe o conteudo da propriedade

    console.log(person[property])

  

}

  

let students = ["Diego", "Lodi", "Daniel"]

  

for (let index in students) {

    //console.log(index)

    console.log(students[index])

  

}
```
## For of
- Itera sobre valores de um objeto iteravel
```
let students = ["Rodrigo", "Amanda", "Rose"]

  

for (let student of students) {

    console.log(student)

}
```
## Break
- Encerra a execucao da reeticao ou switch para seguir para a instrucao seguinte
```
/*

let option = 3

  

switch(option) {

    case 1:

        console.log("Cadastrar")

        break

    case 2:

        console.log("Atualizar")

        break

    case 3:

        console.log("Remover")

        break

    default:

        console.log("Opcao invalida")

        break

}

*/

  

// Utilizando o break para finalizar uma repeticao

for(let i = 0; i<10; i++) {

    if (i===5) {

        break

    }

  

    console.log(i)

}
```
## Continue
Encerra a iteracao atual e contiua a execucao do loo com a proxima iteracao
```
for (let i = 0; i<10; i++) {

  

    if (i===5) {

        continue

    }

  

    console.log(i)

}
```