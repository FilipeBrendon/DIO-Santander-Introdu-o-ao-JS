let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0

function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML=currentNumber
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }
    
}
function increment(){
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML=currentNumber
 
    if(currentNumber > 0){
        document.getElementById("currentNumber").style.color = "blue";
    }
}
