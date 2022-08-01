function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

console.log(forInExemplo(meuObjeto));
console.log(forInExemplo2(meuObjeto));