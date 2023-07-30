const body =document.body
const screen = document.querySelector('.screen');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const btn0 = document.querySelector('.btn-0');
const clrBtn = document.querySelector('.clear-btn')
const addBtn = document.querySelector('.add-btn');
const subtBtn = document.querySelector('.sub-btn');
const multiplytBtn = document.querySelector('.multiply-btn');
const divtBtn = document.querySelector('.div-btn');
const equalsBtn = document.querySelector('.equals-btn')
const dcmlBtn = document.querySelector('.decimal')
const delBtn = document.querySelector('.del')
let storageBank=[];

let firstNumber ='';
let operator = '';
let secondNumber=''

window.addEventListener('keydown', (e)=>{
    if (e.key === '1') {

        
        screen.innerText+='1'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '2') {

        
        screen.innerText+='2'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '3') {

        
        screen.innerText+='3'
        storageBank=screen.innerText;

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '4') {

        
        screen.innerText+='4'
        storageBank=screen.innerText;

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '5') {

        
        screen.innerText+='5'
        storageBank=screen.innerText;

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '6') {

        
        screen.innerText+='6'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '7') {

        
        screen.innerText+='7'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '8') {

        
        screen.innerText+='8'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '0') {

        
        screen.innerText+='0'
        storageBank=screen.innerText;

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '9') {

        
        screen.innerText+='9'
        storageBank=screen.innerText;

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '-') {

        firstNumber = storageBank
        operator = '-';
        screen.innerText=''
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '/') {

        firstNumber = storageBank
        operator = '/';
        screen.innerText=''
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '+') {

        firstNumber = storageBank
        operator = '+';
        screen.innerText=''
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '*') {

        firstNumber = storageBank
        operator = '*';
        screen.innerText=''
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === 'Backspace') {

        screen.innerText=screen.innerText.toString().slice(0,-1)
    firstNumber=screen.innerText;
    storageBank=firstNumber;
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') {

        
        if (operator=== '+') {
            const secondNumber = storageBank;
            const result = parseFloat(firstNumber)+
                parseFloat(secondNumber);
                screen.innerText=''
            screen.innerText=result.toString();
    
            storageBank=result;
        }
        
        else if (operator=== '-') {
            const secondNumber = storageBank;
            const result = parseFloat(firstNumber)-
                parseFloat(secondNumber);
                screen.innerText=''
            screen.innerText=result.toString();
    
            storageBank=result;
        }
    
        else if (operator=== '*') {
            const secondNumber = storageBank;
            const result = parseFloat(firstNumber)*
                parseFloat(secondNumber);
                screen.innerText=''
            screen.innerText=result.toString();
    
            storageBank=result;
        }
    
        else if (operator=== '/') {
            const secondNumber = storageBank;
            const result = (parseFloat(firstNumber)/
                parseFloat(secondNumber));
                screen.innerText=''
            screen.innerText=result.toString();
    
            storageBank=result;
        }

    }
})
dcmlBtn.addEventListener('click',()=>{

  
    screen.innerText+='.'
    storageBank=screen.innerText;



})

btn1.addEventListener('click',()=>{

    
  
        screen.innerText+='1'
        storageBank=screen.innerText;
        
   

    
})

btn2.addEventListener('click',()=>{
    screen.innerText+='2'
    storageBank=screen.innerText;
    
})

btn3.addEventListener('click',()=>{
    screen.innerText+='3'
    storageBank=screen.innerText;
     
})

btn4.addEventListener('click',()=>{
 
    screen.innerText+='4'
    storageBank=screen.innerText;
    
})
btn5.addEventListener('click',()=>{
 
    screen.innerText+='5'
    storageBank=screen.innerText;
    
})
btn6.addEventListener('click',()=>{
 
    screen.innerText+='6'
    storageBank=screen.innerText;
    
})
btn7.addEventListener('click',()=>{
 
    screen.innerText+='7'
    storageBank=screen.innerText;
    
})
btn8.addEventListener('click',()=>{
 
    screen.innerText+='8'
    storageBank=screen.innerText;
})
btn9.addEventListener('click',()=>{
 
    screen.innerText+='9'
    storageBank=screen.innerText;
    
})
btn0.addEventListener('click',()=>{
 
    screen.innerText+='0'
    storageBank=screen.innerText;
})

clrBtn.addEventListener('click', () => {
   screen.innerText='';
   storageBank['']
})



addBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    secondNumber = screen.innerText
   storageBank.push[screen.innerText]
    operator = '+';
    screen.innerText=''
})

subtBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    operator = '-';
    screen.innerText=''
})

multiplytBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    operator = '*';
    screen.innerText=''
})

divtBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    operator = '/';
    screen.innerText=''
})

equalsBtn.addEventListener('click', (e) =>  {
    if (operator=== '+') {
        const secondNumber = storageBank;
        const result = parseFloat(firstNumber)+
            parseFloat(secondNumber);
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }
    
    else if (operator=== '-') {
        const secondNumber = storageBank;
        const result = parseFloat(firstNumber)-
            parseFloat(secondNumber);
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }

    else if (operator=== '*') {
        const secondNumber = storageBank;
        const result = parseFloat(firstNumber)*
            parseFloat(secondNumber);
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }

    else if (operator=== '/') {
        const secondNumber = storageBank;
        const result = (parseFloat(firstNumber)/
            parseFloat(secondNumber));
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }

});
delBtn.addEventListener('click',(e)=>{
    screen.innerText=screen.innerText.toString().slice(0,-1)
    firstNumber=screen.innerText;
    storageBank=firstNumber;
})