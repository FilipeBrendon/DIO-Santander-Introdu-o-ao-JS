function findMax(){
 
    let max = -Infinity

    for(let i = 0 ; i < arguments.length ; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }
    return ` O maior numero é ${max}`
}


console.log(findMax(1,2,3,55,4,5,77,6));