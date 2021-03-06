let nombre = document.querySelector('#name');
let form = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password_1');
let errorsElement = document.querySelector('#errors');
let button = document.querySelector('#boton');
errorsElement.style.display="none"


button.addEventListener("click", (event)=>{
      
    event.preventDefault()
    const errors = []
    errorsElement.innerHTML = '' 
    
    if(nombre.value.trim().length <= 2){
        errors.push('su nombre debe tener como minimo 2 caracteres')
    }
    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('ingrese un email valido')
    }


    fetch("http://localhost:3000/api/users")

    .then((response)=>{
        return response.json();
    })
    .then((users)=>{
           for(user of users){
               if(user.email== email.value){
                errors.push('email ya registrado')
               }
           }
    })
    
    if(password.value.trim().length <= 8){
        errors.push('su contraseña debe tener como minimo 8 caracteres')
    }

    errorsElement.style.display="block"

    if (!errors.length) {
               form.submit()
    }
    
    for (const error of errors) {
        errorsElement.innerHTML += `<li>${error}</li>`
    }
})
