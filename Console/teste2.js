function returnEvenValues(array){
    let evenNums=[];
    let notEvenNums=[];
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i])
        }else{
            notEvenNums.push(array[i])
        }
    }
    console.log(`${evenNums} numeros pares`)
    console.log(`${notEvenNums} numeros impares`)
    
}

let array = [1, 2, 3, 4, 5, 6]

returnEvenValues(array)