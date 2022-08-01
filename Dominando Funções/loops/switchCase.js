function getAnimal(id){
    switch(id){
        case 1:
        return "cão";
        case 2: 
        return "gato";
        case 3:
        return "passaro";
        case 4:
        return "peixe";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal(""));

