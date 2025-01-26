- objetos têm propriedades (características) e métodos (comportamentos)


## Criacao de objeto e acessando ele

```
/*

    Objeto

        - Uma colecao de dados e/ou funcionalidades

        - Podem te propriedades e métodos

*/

  
  

// Cria um objeto vazio

const obj = {}

console.log(typeof obj)

  

// Cria um objeto com propriedades e métodos

const user = {

    email: "diego@email.com",

    age: 19,

    name: {

        first_name: "Diego",

        surname: "Catalan"

    },

    adress: {

        street: "Rua X",

        number: 23,

        city: "Sao Paulo",

        postal_code: "1234-123"

    },

    message: function() {

        console.log("Oi Rodrigo")

    },

}

  

//Acessando propriedades e metodos usando a notacao de ponto.

  

console.log(user.email)

  

//Acessando propriedade de objetos

console.log(user.name.first_name)

  
  

//Executa o metodo do objeto

user.message()

  

// notacao de colchetes

console.log(user["email"])

console.log(user["name"]["first_name"])

user["message"]()
```

## Acessando propriedades de um objeto
- Possibilidade de usar this caso seja na mesma funcao que queremos retornar
- tem que criar a function com function, nao pode usar =>

```
const user = {

    name: "Diego",

    message: function () {

        //console.log(`Ola ${user.name}`)

        console.log(`Ola ${this.name}`)

    },

}

  

user.message()
```

## Atualizar um objeto
```
const product = {

    name: "teclado",

    quantity: 100

}

  
  

//acessando a propriedade do objeto

console.log(product.name)

  

// atualiza o valor de uma propriedade

product.quantity = 90

console.log(product.quantity)

  

product.name = "mouse"

console.log(product.name)

  

//notacao de colchetes

product["quantity"] = 50

console.log(product)
```
```
```
```
```
## Optional Chaining  - Encadeamento opcional
Se a propriedade ou funcao chamada é nullish (null ou undefined), a expressao retorna undefined em vez de gerar um erro

util ao explorar o conteudo de um objeto quando nao existe garantia da existencia de determinadas propriedades obrigatorias
```
const user = {

    id: 1,

    name: "Rodrigo",

    /*

    address: {

        street: "Avenida Brasil",

        city: "Sao Paulo",

        geo: {

            latitude: 47.808,

            longitude: 17.5674,

        },

    },

    */

    message: function() {

        console.log(`Ola, ${this.name}`)

    }

}

console.log(user?.address)

console.log(user?.address?.street)

  

user.message?.()
```

## Operador de coalescencia nula
Ooerador logico que retorna o seu operando do lado direito quando o seu operado do lado esquerdo é null ou undefined. Caso contrario, ele retorna seu operador do lado esquerdo
```
let content = false

console.log(content ?? "conteudo padrao")

  

const user = {

    name: "Rodrigo",

    avatar: null,

}

  

console.log(user.avatar ?? "default.png")
```
## Funcao construtora
```
function createProduct(name) {

    const product = {}

  

    product.name = name

    product.details = function() {

        console.log(`O nome do produto e ${this.name}`)

    }

  

    return product

}

  

// O new cria um novo objeto utilizando a estrutura da funcao construtora

const product1 = new createProduct("Teclado")

console.log(product1.name)

product1.details()

  
  

const product2 = new createProduct("Mouse")

console.log(product2.name)

product2.details()

  

//console.log(product1 === product2)

  

// Exemplos de funcoes construturas disponiveis no proprio JS

  

let myName = new String("Diego")

console.log(myName)

  

let price = "40.6".replace(".", "")

console.log(price)

  

let date = new Date("2024-1-1")

console.log(date)

  
  

function Person(name){

    this.name = name

    this.message = function() {

        console.log(`Ola, ${this.name}`)

    }

}

  

const person1 = new  Person ("Rodrigo")

console.log(person1.name)

person1.message()

  

const person2 = new  Person ("Rodrigo")

console.log(person2.name)

person2.message()
```
## Instancia
Uma instância é uma cópia de um objeto criado por uma função construtora em Javascript;
# Metodos de texto
## Texto maiusculo e minusculo
```
let message = "Estou estudando os fundamentos de Javascript."

console.log(message)

  

//Exibir o texto em maiusculo

console.log(message.toUpperCase())

  

//Exibir o texto em minusculo

console.log(message.toLowerCase())
```
## comprimento de uma string
```
let message = "Estou estudando os fundamentos de Javascript."

  
  

//comprimento de uma string

console.log(message.length)

  

let password = "12345"

  

if (password.length <6 ) {

    console.log("A senha deve ter ao menos 6 caracteres")

}

  
  

// Quantos digitos tem um numero

let value = 12345

console.log(String(value).length)

console.log(value.toString().length)
```
## Substituindo e fatiando um texto
- Slice
- Trim

```
let message = "Estou estudando os fundamentos de Javascript."

  

// Substituir parte de um texto

console.log(

    message.replace("os fundamentos de Javascript","Metodos de string")

)

console.log(message)

  

//Extraindo uma parte da string (start, end)

console.log(message.slice(6,30))

  

//Extraindo uma parte da string de tras ara frente

console.log(message.slice(-11))

  

let textWithSpace = "    Texto de exemplo   "

console.log(textWithSpace.length)

  

//Remove espacoes em branco no inicio e no final da string

console.log(textWithSpace.trim())
```

## Separando e unindo strings
```
let text = "Estudar, Aprender, Praticar"

  

//Separar a string

let separate = text.split(",")

console.log(separate)

  

let message = "Estou aprendendo Javascript"

console.log(message.split(" "))

  

//unir a string

let joined = separate.join(" - ")

console.log(joined)
```
## Encontrando um conteudo no texto

```
let message = "Estou estudando os fundamentos do Javascript"

  

// Obtem a posicao da palavra

console.log(message.indexOf("Javascript"))

  

//verificar se existe a palavra na string

console.log(message.includes("Javascript"))

console.log(message.toLowerCase().includes("javascript"))

  

console.log(message.includes("html"))
```