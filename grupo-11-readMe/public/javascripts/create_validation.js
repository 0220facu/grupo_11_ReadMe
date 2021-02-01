
const titulo = document.querySelector("#titulo") ;
const descripcion = document.querySelector("#sinopsis") ;
const errorsElement = document.querySelector("#errors") ;  
const boton = document.querySelector("#boton") ;  
const image = document.querySelector("#img") ;  
errorsElement.style.display="none"

boton.addEventListener( "click", (event)=> { 
        event.preventDefault()  
        const errors = [] ;
        errorsElement.innerHTML = '' 

        if (titulo.value.trim().length <= 5) {
            errors.push("El campo de nombre debe tener al menos 5 caracteres");    
        }
        if (sinopsis.value.length <= 20) {
            errors.push("El campo descripcion debe ser al menos de 20 caracteres");    
        }
        if (image.value == "") {
            errors.push('Debe cargar la imagen del producto.');
        } else {
        const extencion = this.image.files[0].type;   
        if(!(extencion == "image/jpeg" || extencion == "image/png" || extencion == "image/csv" || extencion == "image/jpg")){ 
        errors.push('La imagen tiene una extensión inválida.')}} 

        errorsElement.style.display="block"
        if (!errors.length) {
            form.submit()
            }
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`
        }
       
        
}) 