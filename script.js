function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}

//this function is use for coma separate for number format like 1,000
function getFormattedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

// this function is remove all 'coma separate'
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

// display the operators in the calculator's display when it will click the button
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        alert("The operator clicked:"+this.id);
    })
}

// display the numbers in the calculator's display when it will click the button
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        alert("The number clicked:"+this.id);
    })
}