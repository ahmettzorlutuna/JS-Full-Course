const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() { //update Display function
    display.value = displayValue;
}

keys.addEventListener('click',function(event){
    const element = event.target;

    if(!element.matches('button')) return; //Seçilen element button içermiyorsa ekrana yazılamayacak.

    if(element.classList.contains('operator')){
        // console.log('operator',element.value);
        handleOperator(element.value);
        updateDisplay();
        return;
    }

    if(element.classList.contains('clear')){
        // console.log(element.value);
        clearDisplay();
        return;
    }

    if(element.classList.contains('decimal')){
        //console.log('decimal',element.value);
        inputDisplay();
        return;
    }

    //console.log('number',element.value);
    inputNumber(element.value);
})

function handleOperator(nextOp){ //Herhangi bir operatöre basıldığında.
    const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator = nextOp;
        return;
    }

    if(firstValue === null){
        firstValue = value;
    }else if (operator){
        const result = calculate(firstValue,value,operator); //İlk değer girilmişse bundan sonraki yapılacak matematiksel işlemler
        displayValue = String(result);
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOp;
    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}

function calculate(first, second, operator){
    if(operator === '+'){
        return first + second;
    }else if(operator === '-'){
        return first - second;
    }else if (operator === '*'){
        return first * second;
    }else if (operator === '/'){
        return first / second;
    }
    return second;
}

function inputNumber(number){
    if(waitingForSecondValue){
        displayValue = number;
        waitingForSecondValue = false;
    }else{
        displayValue = displayValue === '0'? number: displayValue + number; //Dipslaydeki rakam 0 sa tıklanan rakamı yaz. değilse sonuna ekle.
    }
    updateDisplay();
    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}

function inputDisplay(){
    if(!displayValue.includes('.')){
        displayValue = displayValue + '.';
    }
    updateDisplay();
}

function clearDisplay(){
    displayValue = '0';
    updateDisplay();
}