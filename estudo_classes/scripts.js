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