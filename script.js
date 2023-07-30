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
let storageBank=[0];

let firstNumber ='';
let operator = '';
let secondNumber=''

function clearall() {
    screen.innerText=''
    firstNumber='';
    storageBank=[0];
    operator=''
    secondNumber=''
}

window.addEventListener('keydown', (e)=>{
    if (e.key === '1') {

        
        screen.innerText+='1'
        storageBank=screen.innerText;
        btn1.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn1.removeAttribute('style')
       },100)

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '2') {

        
        screen.innerText+='2'
        storageBank=screen.innerText;
        btn2.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn2.removeAttribute('style')
       },100)
        

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '3') {

        
        screen.innerText+='3'
        storageBank=screen.innerText;
        btn3.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn3.removeAttribute('style')
       },100)

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '4') {

        
        screen.innerText+='4'
        storageBank=screen.innerText;
        btn4.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn4.removeAttribute('style')
       },100)

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '5') {

        
        screen.innerText+='5'
        storageBank=screen.innerText;
        btn5.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn5.removeAttribute('style')
       },100)

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '6') {

        
        screen.innerText+='6'
        storageBank=screen.innerText;
        btn6.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn6.removeAttribute('style')
       },100)

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '7') {

        
        screen.innerText+='7'
        storageBank=screen.innerText;
        btn7.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn7.removeAttribute('style')
       },100)

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '8') {

        
        screen.innerText+='8'
        storageBank=screen.innerText;
        btn8.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn8.removeAttribute('style')
       },100)

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '0') {

        if(!screen.innerText===true){
            screen.innerText=''
        }
     else
       { screen.innerText+='0'
        storageBank=screen.innerText;};

        btn0.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn0.removeAttribute('style')
       },100)
       

    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '9') {

        
        screen.innerText+='9'
        storageBank=screen.innerText;
        btn9.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        btn9.removeAttribute('style')
       },100)

    }
})
window.addEventListener('keydown', (e)=>{
    if (e.key === '-') {

        firstNumber = storageBank
        operator = '-';
        screen.innerText=''
        subtBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
        setTimeout(()=>{
         subtBtn.removeAttribute('style')
        },100)
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '/') {

        firstNumber = storageBank
        operator = '/';
        screen.innerText=''
        divtBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        divtBtn.removeAttribute('style')
       },100)
        
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '+') {

        firstNumber = storageBank
        operator = '+';
        screen.innerText=''
        addBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        addBtn.removeAttribute('style')
       },100)
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === '*') {

        firstNumber = storageBank
        operator = '*';
        screen.innerText=''
        multiplytBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        multiplytBtn.removeAttribute('style')
       },100)
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === 'Backspace') {

        screen.innerText=screen.innerText.toString().slice(0,-1)
    firstNumber=screen.innerText;
    storageBank=firstNumber;
    delBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
       setTimeout(()=>{
        delBtn.removeAttribute('style')
       },100)
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === 'c') {

        clearall();

        clrBtn.setAttribute('style','background-color: rgb(216, 42, 42);scale:85%');
       setTimeout(()=>{
       clrBtn.removeAttribute('style')
       },100)
       

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
        equalsBtn.setAttribute('style','background-color:rgb(88, 88, 106);scale:85%');
        setTimeout(()=>{
         equalsBtn.removeAttribute('style')
        },100)

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

    if(!screen.innerText===true){
        screen.innerText=''
    }
 else
   { screen.innerText+='0'
    storageBank=screen.innerText;};
})

clrBtn.addEventListener('click', () => {
  clearall();
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