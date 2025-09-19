let inputArea=document.getElementById("inputArea")
let firstnum=null;
let opp=null;

function test(number){
    inputArea.value+=number;
}

function decimal(){
    if(!inputArea.value.includes(".")){
        inputArea.value+=".";
    }
}
function allClear(){
    inputArea.value=""
    firstnum=null;
    opp=null;
}
function backspace() {
    inputArea.value = inputArea.value.slice(0, -1);
}
function operation(op){
    firstnum=Number(inputArea.value)
    opp=op;
    inputArea.value=""
}
function root(){
    if(inputArea.value!=''){
      firstnum=Number(inputArea.value)
      inputArea.value=Math.sqrt(firstnum).toFixed(4)
    }
}
function calculate(){
        let secondnum=Number(inputArea.value)
    if (inputArea.value !== "" && firstnum !== null){
    let result;
   switch(opp){
    case "+":
        result=firstnum+secondnum;
        break;
    case "-":
        result=firstnum-secondnum;
        break;
    case "/":
        result= secondnum==0?"Error":firstnum/secondnum;
        result=result.toFixed(2)
        break;
    case "*":
        result=firstnum*secondnum;
        break;
    case "power":
        result=Math.pow(firstnum,secondnum);
    }

    inputArea.value=result
    firstnum = null;
    opp = null;
}
}