function multiplicaPorDois(arr){
    const multiplicados = []
    for(var i = 0 ;i < arr.length; i++){
        multiplicados.push(arr[i] * 2)
    }
    return multiplicados

}

const meusNumeros = [2,33,456,356,40]

console.log(`Numeros (${meusNumeros}) multiplicados por dois (${multiplicaPorDois(meusNumeros)})`);