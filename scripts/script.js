const formInputs = document.querySelectorAll('.input-form');

function inputBorder(){
    if (formInputs.forEach((input) =>{
        formInputs.style.outlineColor !== 'blue'
    }) ){
        formInputs.style.outlineColor === 'blue'
    };
};

formInputs.addEventListener('focus', inputBorder);