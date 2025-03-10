function changeText(){
    document.getElementById("myText").innerHTML="Rekenmachine";
}


function changeDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    display.value = eval(display.value);
}