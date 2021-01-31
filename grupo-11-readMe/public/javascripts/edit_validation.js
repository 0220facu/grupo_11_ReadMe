    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function(e){
       e.preventDefault(); 

        let errores = [];

        const campoNombre = document.querySelector("imput.name");

        if (campoNombre.value.length < 5) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");    
        }
        const campoDescripcion = document.querySelector("imput.description");
        
        if (campoDescripcion.value.length < 20) {
            errores.push("El campo descripcion debe ser al menos de 20 caracteres");    
        }

        const ext = this.image.files[0].type;
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){
            errors.push('La imagen tiene una extensión inválida.');        
        }

        const errorsElement = document.querySelector("#errors");

        if (!errores.length) {
            form.submit()
        }
        for (const error of errors) {
            errorsElement.innerHTML += `<li>$ { error } </li>`
        }

        e.preventDefault();
    });


