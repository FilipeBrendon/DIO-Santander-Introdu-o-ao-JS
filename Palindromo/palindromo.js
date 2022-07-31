//Solucao 1

function verificaPalindromo(string){
    if(!string) return "Digite algo"

    return string.split("").reverse().join("") === string
}

//Solucao 2

function verificaPalindromo2(string){
    if(!string) return "Digite algo"

    for(var i = 0; i < string.length; i++){
        if(string[i] !== string[string.length -1 -i]) {
        return false
        }
    }
    return true
}

console.log(verificaPalindromo2("gato"))