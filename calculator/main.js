class Cal {
  
  constructor(prevDisplayElement, currDisplayElement){
    this.prevDisplayElement = prevDisplayElement
    this.currDisplayElement = currDisplayElement
    this.clr_display()
  }
  
  clr_display(){
    this.currentInput = ''
    this.previousInput = ''
    this.action = undefined
  }
  
  conca_number(num){
    this.currentInput = this.currentInput.toString() + num.toString()
    console.log('conc val=> ', this.currentInput)
    
  }
  
  output_display(){
    this.currDisplayElement.innerText = this.currentInput
    if(this.action != null){
      this.prevDisplayElement.innerText = this.previousInput.toString() + this.action.toString()
    }
    else{
      this.prevDisplayElement.innerText = ''
    }
  }
  
  performOperation(){
    let result
    
    const currInput = parseInt(this.currentInput)
    console.log('current int val=> ', currInput)
    const prevInput = parseInt(this.previousInput)
    console.log('prev int val=> ', prevInput)
    if(isNaN(currInput) || isNaN(prevInput)) return
    
    switch(this.action){
      case '+':
        result = prevInput + currInput
        break
      case '-':
        result = prevInput - currInput
        break
      case '*':
        result = prevInput * currInput
        break
      case '/':
        result = prevInput / currInput
        break
      default:
        return
    }
    console.log('compute result=> ', result)
    this.equalInput = currInput
    this.currentInput = result
    this.action = undefined
    this.previousInput = ''
  }
  
  selectOperation(action){
    if(this.currentInput == '') return
    if(this.previousInput != ''){
      this.performOperation()
    }
    
    this.action = action
    console.log('action selected', this.action)
    console.log('current val=> ', this.currentInput)
    this.previousInput = this.currentInput
    console.log('current - previous val=> ', this.previousInput)
    this.currentInput = ''
    
  }
}

const numButton = document.querySelectorAll('[num-data]')
const opButton = document.querySelectorAll('[op-data]')
const cancelButton = document.querySelector('[cancel-data]')
const equalButton = document.querySelector('[equal-data]')
const prevDisplayElement = document.querySelector('[prev-operand]')
const currDisplayElement = document.querySelector('[curr-operand]')

const cal = new Cal (prevDisplayElement, currDisplayElement)

console.log(numButton)
console.log(opButton)
console.log(cancelButton)
console.log(equalButton)

numButton.forEach(button => {
  button.addEventListener('click', ()=> {
    cal.conca_number(button.innerText)
    cal.output_display()
  })
})

opButton.forEach(button => {
  button.addEventListener('click', ()=> {
    cal.selectOperation(button.innerText)
    cal.output_display()
  })
})

equalButton.addEventListener('click', button=> {
  cal.performOperation()
  cal.output_display()
})

cancelButton.addEventListener('click', button=> {
  cal.clr_display()
  cal.output_display()
  
})




















/*

function getId (idName){
  return document.getElementById(idName);
}

function operation(num1, num2, operator){
  
  switch(operation){
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      result = num1 / num2;
      break;
  }
}


var result =0;
var currentInput = '';
var previousInput = 0
var screen = getId('screen');

screen.innerHTML = ''

getId('seven').addEventListener('click', function(){
  currentInput += '7'
  screen.innerHTML = currentInput
})

getId('eight').addEventListener('click', function(){
  screen.innerHTML += '8';
  input = 8;
})

getId('nine').addEventListener('click', function(){
  screen.innerHTML += '9';
  input = 9;
})

getId('four').addEventListener('click', function(){
  screen.innerHTML += '4';
  input = 4;
})

getId('five').addEventListener('click', function(){
  screen.innerHTML += '5';
  input = 5;
})

getId('six').addEventListener('click', function(){
  screen.innerHTML += '6';
  input = 6;
})

getId('one').addEventListener('click', function(){
  screen.innerHTML += '1';
  input = 1
})

getId('two').addEventListener('click', function(){
  screen.innerHTML += '2';
  input = 2
})

getId('three').addEventListener('click', function(){
  screen.innerHTML += '3';
  input = 3;
})

getId('zero').addEventListener('click', function(){
  screen.innerHTML += '0';
  input = 0;
})

getId('plus').addEventListener('click', function(){
  screen.innerHTML += "+";
  result += input;
})
getId('minus').addEventListener('click', function(){
  screen.innerHTML += "-";
})

getId('multi').addEventListener('click', function(){
  screen.innerHTML += "*";
})

getId('divide').addEventListener('click', function(){
  screen.innerHTML += "/";
})

getId('equal').addEventListener('click', function(){
  screen.innerHTML += "=";
})

getId('cancel').addEventListener('click', function(){
  screen.innerHTML= '';
})


operation(result, num, operator);

*/