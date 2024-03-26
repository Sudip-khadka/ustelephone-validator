let submitBtn =document.getElementById('check-btn');
let clearBtn =document.getElementById('clear-btn');
let preview =document.getElementById('results-div');


let regex = /^1?[-. ]?(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;

submitBtn.addEventListener('click',()=>{

let input =document.getElementById('user-input').value.trim();
    if(input===""){
        alert("Please provide a phone number");
    }
    else if(regex.test(input)){
        preview.innerHTML += `<h4>Valid Us Number: ${input}</h4>`
    }
    else{
        preview.innerHTML += `<h4>Invalid Us Number: ${input}</h4>`
    }
})

clearBtn.addEventListener('click',()=>{
    preview.innerHTML = "";
})
