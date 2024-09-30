const SubmitFuncion = (event) => {
    event.preventDefault() // Va a prevenir la actualizacion de la web
    validarFormulario()
}

document.getElementById('formulario').addEventListener('submit', SubmitFuncion)

function validarFormulario(){
    let campoTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;
    
    campoTexto.forEach(campo =>{
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayúscula 
        if (campo.value.length == ''){
            mostrarError(errorCampo,'¡Este campo es requerido')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo,'¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }

    })
 // Validacion de campo Email

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // este regex valida que el formato del email se válido
        ocultarError(errorCampo)
    }else{
        mostrarError(errorEmail,'Ingrese un email válido')
    }

 // validacion de edad
  
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18){
        mostrarError(errorEdad,'¡Debes ser mayor de 18 para registrarte!')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }
    
  //Validacion de la actividad
  const actividad = document.getElementById('actividad') 
  const errorActividad = document.getElementById('errorActividad')

  if(actividad.value == 'Por Favor, selecciona una actividad'){
    

  }




}

const mostrarError = (elemento,mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
