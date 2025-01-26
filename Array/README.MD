# Array
- array, que é uma coleção ordenada de valores, onde cada item possui uma posição específica chamada de índice

```
// criando Array com um construtor

  

const newArray = new Array ()

console.log(newArray)

console.log("Diego".length)

console.log(newArray.length)

  

// [] - Array

// {} - Object

  
  

// Cria o Array com 10 posicoes vazias

const available = new Array(10)

console.log(available)

console.log(available.length)
```


## Posicoes do Array
```
//Cria o Array

  
  

let fruits = ["apple", "banana", "Orange"]

console.log(fruits)

  

//Quantidade de itens do Array

console.log(fruits.length)

  

//Acessa o item pelo indice

console.log(fruits[0])

  

//Aqui pegamos o ultimo item

console.log(fruits[fruits.length-1])
```

##  Convertendo uma string para Array
```
let fullName = "Diego Catalan"

console.log(fullName)

  

//Cria um array com os nomes separando pelo espaco

console.log(fullName.split(" "))

  

//Cria um array com as letras.

console.log(Array.from(fullName))
```
## Adicionando e removendo itens no array
```
let users = []

//console.log(users)

  
  

//Adicionar um item no final do array

users.push("Diego")

users.push("Pedro")

users.push("Marcos")

  

// Adiciona um item no inicio do array

users.unshift("Ana")

  
  

// Remove o item do inicio do array

users.shift()

  

// Remove do final do array

users.pop()

  

console.log(users)
```
## Usando o indice
```
let fruits = ["Apple", "watermelon", "Strawberry"]

  

//console.log(fruits)

  

let position = fruits.indexOf("watermelon")

console.log(position)

  
  

//Remove um item pela posicao do indice (1 e o numero de itens para remover)

  

//fruits.splice(1, 3)

fruits.splice(position,1)

console.log(fruits)
```

## Elementos que o Array aceita
```
let myArray = [

    "Um texto",

    10,

    true,

    function () {

        console.log("funcao dentro do array")

    },

    {

        name: "Diego",

        email: "Diego@email.com"

    }

]

  

//texto

console.log(myArray[0])

  

// numero

console.log(myArray[1])

  

// Boolean

console.log(myArray[2])

  

// Funcao

myArray[3]()

  

//Objeto

console.log(myArray[4].name, myArray[4].email)
```