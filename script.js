const SubmitFunction = (event) => {
    event.preventDefault();


    if(!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('Documento').value + '\n'+
            'Email: ' + document.getElementById('Email').value + '\n'+
            'Edad: ' + document.getElementById('Edad').value + '\n'+
            'Actividad: ' + document.getElementById('Actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('NivelEstudio').value + '\n'
        );
    }
}

document.getElementById('formulario').addEventListener('submit', SubmitFunction)

function validarFormulario(){

    //Esto valida los campos de texto

    let campoTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;
    
    campoTexto.forEach(campo =>{
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayúscula
         
        if (campo.value.length === 0){
            mostrarError(errorCampo,'¡Este campo es requerido!')
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
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail,'¡Ingrese un email válido!')
    }

 // validacion de edad
  
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    // Convierte el valor a un número
    const edadValor = Number(edad.value);

    if (edad.value === '') { // Verifica si el campo está vacío
        mostrarError(errorEdad, '¡Este campo es requerido!'); 
        validacionCorrecta = false; 
    } else if (isNaN(edadValor) || edadValor < 18) { // Verifica si no es un número o es menor a 18
        mostrarError(errorEdad, '¡Debes ser mayor de 18 para registrarte!');
        validacionCorrecta = false; 
    }else{
        ocultarError(errorEdad)
    }
    
  //Validacion de la actividad

  const actividad = document.getElementById('actividad') 
  const errorActividad = document.getElementById('errorActividad')

  if (actividad.value === '' || actividad.value === 'Por Favor, selecciona una actividad') {
    mostrarError(errorActividad,'Por favor selecciona una actividad')
    validacionCorrecta = false;
  }else{
    ocultarError(errorActividad)
  }


// Validacion nivel de estudio

const nivelEstudio = document.getElementById('nivelEstudio')
const errorNivelEstudio = document.getElementById('errorNivelEstudio')

 if(nivelEstudio.value == ''){
    mostrarError(errorNivelEstudio,'Por favor, seleccione un nivel de estudio')
    validacionCorrecta = false;
 }else{
    ocultarError(errorNivelEstudio)
 }

//Validar terminos y condiciones 
const aceptoTerminos = document.getElementById('aceptoTerminos')
const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

if(!aceptoTerminos.checked){
    mostrarError(errorAceptoTerminos,'¡Debes aceptar los terminos y condiciones!')
    validacionCorrecta = false
}else{
    ocultarError(errorAceptoTerminos)
}
return validacionCorrecta // Esto dira si el formulario correcto dio valido

}

const mostrarError = (elemento,mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}

