    const boton = document.querySelector("#boton");
    const errorsElement = document.querySelector("#errors");
    const titulo = document.querySelector("#titulo");
    const sinopsis = document.querySelector("#sinopsis"); 
    const image = document.querySelector("#img"); 
    const form = document.querySelector('#form');
        errorsElement.style.display="none"
    boton.addEventListener("click", (event)=>{
           
        event.preventDefault(); 
        const errors = [];
        errorsElement.innerHTML = '' 

        if (titulo.value.trim().length <= 5) {
            errors.push("El campo de nombre debe tener al menos 5 caracteres");    
        }
       
        if (sinopsis.value.length <= 20) {
            errors.push("El campo descripcion debe ser al menos de 20 caracteres");    
        }

      /*  const ext = this.image.files[0].type;
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){
            errors.push('La imagen debe tener una extencion valida');        
        }*/
        
        if (!errors.length) {
            form.submit()
            }
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`
        }
        errorsElement.display="block"
       
    });


