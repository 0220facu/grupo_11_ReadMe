let formulario = document.querySelector("form") ;
   
   formulario.addEventListener( "submit", function(event) { 
        event.preventDefault()  
    
        let nombre = document.querySelector("#titulo") ;
        let descripcion = document.querySelector("#sinopsis") ;
        let errores = [] ;
        let errorsElement = document.querySelector("#errors") ;
        const ext = this.image.files[0].type; 

        if( nombre.value.length < 5 ){ 
        errores.push( "El campo título debe tener como mínimo 5 caracteres") 
        }
        if( descripcion.value.length < 20 ){
            errores.push("La sinopsis debe tener 20 caracteres como mínimo")
        }    
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){ 
                  errors.push('La imagen tiene una extensión inválida.')}
        if (!errores.length) {
            form.submit()
        }
        for (const error of errores) {
            errorsElement.innerHTML += `<li>${error}</li>`
        }
})



  
  