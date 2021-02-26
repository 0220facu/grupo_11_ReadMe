const email = document.querySelector('#username');
const password = document.querySelector('#password-1');
const boton =  document.querySelector('#boton');
const errorsElement = document.querySelector('#errors')
const form = document.querySelector('#form')
errorsElement.style.display="none"

boton.addEventListener('click' , (event)=>{
    event.preventDefault()
    const errors = []
    errorsElement.innerHTML = '' 

    let regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(email.value)){
        errors.push('ingrese un email valido')
    }else if(password.value < 8){
        errors.push('ingrese una contraseña valida')
    } else {
        const usuario = {email: email.value , password: password.value} 
        fetch('http://localhost:3000/api/checkLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
        const  status=  data.meta.status
        if(status == 400){
            
            errors.push('el email y la contraseña no coinciden')
        }
        })
        
    }
    
    errorsElement.style.display="block"

    if (!errors.length) {
        form.submit()
}

for (const error of errors) {
 errorsElement.innerHTML += `<li>${error}</li>`
}
})