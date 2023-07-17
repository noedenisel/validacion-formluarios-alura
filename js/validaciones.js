// console.log("validaciones");

const inputBday = document.querySelector("#birth")
inputBday.addEventListener("blur", (evento) =>{
    validarNacimiento(evento.target);
})

function validarNacimiento (input){
    const fechaRegistro = new Date(input.value)
    // console.log(fechaRegistro);
    let mensaje = ""
    if ( !mayorDeEdad(fechaRegistro)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
   

    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date()
    console.log("fecha de registro:", fecha, "----", "fecha actual:", fechaActual);
    const diferenciaFecha = new Date(
        fecha.getUTCFullYear()+ 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
        )
        console.log(diferenciaFecha <= fechaActual);
        return diferenciaFecha <= fechaActual
}