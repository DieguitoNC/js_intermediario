# Data e Hora
## Exibindo data e hora
```
//Exibe data e hora atual

console.log(new Date())

  

//Exibe a data e hora de referencia (considera o fuso)

console.log(new Date(0))

  

//Exibe o numero de milissegundos

console.log(new Date().getTime())
```

## Definir uma data e hora especifica
```
//Define com ano, mes (0-11), dia

console.log(new Date(2025,0,27))

  

//define ano, mes (0-11) e dia e hora, minuto e segundo

console.log(new Date(2025,0,27,14,30,0))

  

//Define dta e hora com string

console.log(new Date("2025-01-03T14:30:00"))

  

console.log(new Date("January 27, 2025, 13:30:34"))
```
## Metodos para trabalhar com data e hora
```
let date = new Date("2025-01-03T14:30:00")

console.log(date)

  

// Dia da semana de 0 a 6 (domingo sendo 0)

console.log(date.getDay())

  

// Dia do mes vai de 0 a 30

console.log(date.getDate())

  

// Mes vai de 0 a 11

console.log(date.getMonth()+1)

  

//Ano

console.log(date.getFullYear())

  

// Horas

console.log(date.getMinutes())

  

//Segundos

console.log(date.getSeconds())
```
## Modificando data e hora
```
let date = new Date("July 3, 2024, 14:30:00")

  

//Modificar o ano

date.setFullYear(2030)

  

//Modificar o mes

date.setMonth(0)

  
  

//Modificar o dia

date.setDate(10)

  

//Modificar a hora

date.setHours(34)

  

//Modificar o minuto

date.setMinutes(40)

  

//Modificar os segundos

date.setSeconds(32)

  

console.log(date)
```
## Formatando uma data e hora
```
let date = new Date("2025-01-04T10:30:00")

  

//formata para o dia ter 2 dias

let day = date.getDate().toString().padStart(2,"0")

//console.log(day)

  

let month = (date.getMonth()+1).toString().padStart(2,"0")

//console.log(month)

  

let year = date.getFullYear()

let hour = date.getHours()

let minutes = date.getMinutes()

  

console.log(`${day}/${month}/${year} as ${hour}:${minutes}`)
```
## Convertendo uma data para string
```
let date = new Date("2024-01-05T10:30:00")

  
  

//Converte para String

console.log(date.toString())

  
  

//Retorna somente a data

console.log(date.toDateString())

  
  

//Retorna somente a hora

console.log(date.toTimeString())
```
## Exibindo data e hora formatadas de acordo com a localidade
```
let date = new Date("2024-01-05T10:30:00")

  

//Exibe a data e hora no formato local

console.log(date.toLocaleDateString())

console.log(date.toLocaleTimeString())

  

//Exibe a data e hora no horario escolhido

console.log(date.toLocaleDateString("en"))

console.log(date.toLocaleTimeString("en"))
```
## Usando o toLocaleString()
```
let date = new Date("2024-01-05T10:30:00")

  

console.log(date.toLocaleString())

  
  

//Exibe a data e hora em styles diferentes

console.log(date.toLocaleString("en"))

console.log(date.toLocaleString("pt-BR",{

    dateStyle:"short",

})

)

  

console.log(date.toLocaleString("pt-BR",{

    dateStyle:"long",

})

)

  

console.log(date.toLocaleString("pt-BR",{

    dateStyle:"medium",

})

)

  

console.log(date.toLocaleString("pt-BR",{

    dateStyle:"full",

})

)

  

console.log(date.toLocaleString("pt-BR", {

    day:"2-digit",

    month:"2-digit",

    hour:"2-digit",

    minute:"2-digit"

})

)

  

let amount = 2.5

console.log(amount.toLocaleString("pt-BR", {

    style:"currency",

    currency:"BRL"

}))
```
## Conhecendo a Intl (api)
```
//INTL e a API de Internacionalizacao do ECMAScript

  

//Obtem informacoes de localidade

const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

  
  

//Exibe no formato de acordo com a localidade

console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))

  

console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

  
  

const date = new Date()

  

//Obtem a diferenca em minutos do timezone

console.log(date.getTimezoneOffset())

//Obtem a diferenca em horas do timezone

console.log(date.getTimezoneOffset()/60)
```
## Criando uma data e hora com fuso horário
```
const dateWithTimezone = new Date("2025-01-27T13:56:08.514-03:00")

  

//console.log(dateWithTimezone.toISOString())

  

console.log(new Date().toLocaleString())

console.log(dateWithTimezone.toLocaleString())
```