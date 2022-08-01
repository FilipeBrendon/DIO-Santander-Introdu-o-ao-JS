//Ex 1
function numeroPositivo(num){
    let resultado

    if(num < 0){
        resultado = false
    }else{
        resultado = true
    }

    return resultado
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

//Ex 2
function numeroPositivo(num){
    let resultado
    const ehNegativo = num < 0

    if(ehNegativo){
        resultado = false
    }else{
        resultado = true
    }
    return resultado
}

console.log(numeroPositivo(1));

//ex 3

function numeroPositivo(num){
    const ehNegativo = num < 0

    if(ehNegativo){
        return false
    }
    return true
}

console.log(numeroPositivo(-5));
