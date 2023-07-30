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
const clrBtn = document.querySelector('.clr-btn')
const addBtn = document.querySelector('.add-btn');
const equalsBtn = document.querySelector('.equals-btn')
const subtBtn = document.querySelector('.sub-btn');
let storageBank=[];

let firstNumber ='';
let operator = '';

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
   screen.innerText=''
   resultScreen.innerText=''
})



addBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    operator = '+';
    screen.innerText=''
})

subtBtn.addEventListener('click', (e)=>{
    firstNumber = storageBank
    operator = '-';
    screen.innerText=''
})

equalsBtn.addEventListener('click', (e) =>  {
    if (operator=== '+') {
        const secondNumber = storageBank;
        const result = parseInt(firstNumber)+
            parseInt(secondNumber);
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }
    
    else if (operator=== '-') {
        const secondNumber = storageBank;
        const result = parseInt(firstNumber)-
            parseInt(secondNumber);
            screen.innerText=''
        screen.innerText=result.toString();

        storageBank=result;
    }

});