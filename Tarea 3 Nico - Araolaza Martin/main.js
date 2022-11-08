const form = document.querySelector("#formulario")


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let peso = form[2].value
    let estatura = form[1].value
    let imc = peso / ((estatura / 100) *(estatura / 100))
    form[4].value = imc
})


const cotizacion = document.querySelector("#cotizacion")
const pesos = document.querySelector("#pesos")
const dolares = document.querySelector("#dolares")

pesos.addEventListener ("change", (e)=>{
    dolares.value = pesos.value / 140,58
    
})

dolares.addEventListener("change", (e) =>{
    
    pesos.value = dolares.value * 140,58
})
