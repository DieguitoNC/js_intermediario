# Classes
- Sao formas de criar objetos e dfeinir seu comportamento por meio de construtores e metodos
![[Pasted image 20250127113459.png]]
![[Pasted image 20250127113548.png]]
## Criando uma classe com metodo construtor

```
class Person {

    constructor(name) {

        console.log("Ola", name)

    }

}

  

const person = new Person("Diego")
```
## Criando propriedades dentro das classes

```
class Product {

    constructor(name){

        this.name = name

    }

}

  

const product1 = new Product("Teclado")

console.log(product1.name)

  

const product2 = new Product("Mouse")

console.log(product2.name)
```
## Adicionando métodos nas classes
```
class User {

    constructor(name,email){

        this.name = name

        this.email = email

    }

  

    sendEmail(){

        console.log("Email enviado para", this.name,"para o endereco eletronico", this.email)

    }

}

  

const user = new User("Diego", "diego@email.com");

user.sendEmail()
```
## O que é método estático?
- Consigo chamar sem a necessidade de fazer o metodo construtor 
```
class User {

  

    static showMessage(message){

        console.log(message)

    }

}

  

//const user = new User()

//user.showMessage()

  
  

User.showMessage("Essa e uma mensagem")
```
## Como aplicar herança com classes?
- Conseguimos aproveitar de propriedades e metodos herdados

```
class Animal {

    constructor(name) {

        this.name = name

    }

  

    makeNoise(){

        console.log("Algum som generico do animal")

    }

}

  

class Dog extends Animal {

    //nao tem nada

}

  
  

const dog = new Dog("Brutus")

console.log(dog.name)

dog.makeNoise()

  
  

class Cat extends Animal {

    //nao tem nada

}

  
  

const cat = new Cat("mel")

console.log(cat.name)

cat.makeNoise()
```
## Sobrescrevendo métodos
```
class Animal {

    constructor(name) {

        this.name = name

    }

  

    makeNoise(){

        console.log("Algum som generico do animal")

    }

}

  

class Dog extends Animal {

    makeNoise() {

        console.log("Woof! Woof!")

    }

}

  
  

const dog = new Dog("Brutus")

console.log(dog.name)

dog.makeNoise()

  
  

class Cat extends Animal {

    makeNoise() {

        console.log("Miau...Miau...")

    }

  

    run(){

        console.log("Correndo...")

    }

}

  
  

const cat = new Cat("mel")

console.log(cat.name)

cat.makeNoise()

cat.run()
```
## Aprendendo sobre herança e cadeia de protótipos
Linguagem prototipada
- Tem apenas um construtor: Objetos
- Cada objeto tem um link interno para um outro objeto chamado prototype
- O objeto rototype tem um atributo prototype ate chegar em um momento que o valor seja null -> Age como link final dessa cadeia
![[Pasted image 20250127120325.png]]
![[Pasted image 20250127120336.png]]
![[Pasted image 20250127120343.png]]
![[Pasted image 20250127120350.png]]
### Criando um objeto prototype
```
const address = {

    city:"Sao Paulo",

    country:"Brazil",

}

  

console.log(address)

  

const users = ["Diego", "Joao"]

console.log(users)

  

const userName = "Diego Catalan"

console.log(userName.__proto__)
```

## Como utilizar classes pra lidar com exceções
```
let obj = [17]

let index = 300

  

try {

    //obj.execute()

    if(!obj.includes(17)){

        throw new Error("O numero 17 nao esta disponivel")

    }

  

    if (index>99) {

        throw new RangeError("Numero esta fora do intervalo, escolha um numero dentro do intervalo")

    }

} catch(error) {

    if (error instanceof TypeError){

        console.log("Metodo indisponivel")

    }else if(error instanceof RangeError){

        console.log(error.message)

    }else{

        console.log("Nao foi possivel realizar a acao")

    }

    console.log(error)

}
```
## Como utilizar classes para criar erros customizados
```
class MyCustomError {

    constructor(message){

        this.message = "Classe de erro customizada: "+ message

    }

}

  

try {

    //throw new Error("Erro generico")

    throw new MyCustomError("Erro personalizado lancado")

} catch(error){

    if (error instanceof MyCustomError){

        console.log(error.message)

    }else{

        console.log("Nao foi possivel executar")

    }

}
```
