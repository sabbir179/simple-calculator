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
    if(num=="-"){ // if "-" value comes then in display 
        return "";
    }
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
       if(this.id=="clear"){ // clear display 
           printHistory("");
           printOutput("");
       }
       else if(this.id=="backspace"){ // remove previous number
           var output = reverseNumberFormat(getOutput()).toString();
           if(output){ //if output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
           }
       }
       else{ // calculation 
           var output = getOutput();
           var history = getHistory();
           if(output=="" && history !=""){ //if  we want change operator last moment in display 
               if(isNaN(history[history.length-1])){
                   history = history.substr(0, history.length-1);
               }
           }
           if(output!="" || history!=""){
               //condition?true:false
               output = output ==""?
               output: reverseNumberFormat(output);
               history = history + output; //display history
               if(this.id=="="){
                   var result = eval(history);
                   printOutput(result);
                   printHistory("");
               }
               else{ //operator history and when click "=" then remove history and display result
                   history = history + this.id;
                   printHistory(history);
                   printOutput("");
               }
           }
       }
    })
}

// display the numbers in the calculator's display when it will click the button
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output = output+this.id;
            printOutput(output);
        }
    })
}