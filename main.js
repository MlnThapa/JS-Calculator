let container = document.querySelector(".container");
let calculator = document.querySelector(".calculator")
let toggleImage = document.querySelector('.toggleImage');
let toggleButton = document.querySelector('.toggle-button');
let inputField = document.getElementsByTagName('input');
let bool = true;
let toggleLightDark = ()=>{
    for(let i=1;i<inputField.length;i++){
        inputField[i].classList.toggle('input-dark')
    }
    container.classList.toggle('dark')
    calculator.classList.toggle('dark')
    toggleImage.classList.toggle('dark')
    toggleButton.classList.toggle('dark')
    if(bool === true){
        toggleButton.value = "DARK"
        bool = false
    }else{
        toggleButton.value = "LIGHT"
        bool = true;
    }
}

let inputValue = (val) => {
    document.getElementById("display").value += val;
}

let del = ()=>{
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
}

let ac = () =>{
    document.getElementById("display").value = '';
}

let calc = ()=>{
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

