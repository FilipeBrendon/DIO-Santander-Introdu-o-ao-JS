function exponencial(array,num=1){
    const result = []

    for(var i = 0; i < array.length; i++){
        result.push(array[i] ** num)
    }
    return result
}


console.log(exponencial([1 ,2 ,3 ,4],4))

