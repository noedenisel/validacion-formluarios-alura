import { validar } from "./validaciones";

const inputs = document.querySelectorAll("inputs")

inputs.forEach(input => {
    inputs.addEventListener("blur", (input)=> {
        validar(input.target)
    })
})