const conteiner = document.querySelector("#todolist")
const formulario = document.querySelector("#formulario")

const idGlobal = []

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nuevaTarea = {
        nombre: formulario[1].value,
        desc: formulario[2].value,
        realizada: false
    }
    idGlobal.push(nuevaTarea)
    conteiner.innerHTML=''
    idGlobal.forEach(element => {
        
        crearTarjeta(element, conteiner)
        
    });
})
function crearTarjeta (datos, donde){
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card_conteiner")
    tarjeta.innerHTML=
        `<div class="bg-light">
        <input type="checkbox" name="checkbox" id="check">
        <label><h3>${datos.nombre}</h3></label>
        </div>
        <p id="parraf">${datos.desc}</p>
        <button id="delete" class="btn btn-danger delete">Delete</button>`
    donde.appendChild(tarjeta)
    const checkButtons = document.querySelector("#delete")
    if (checkButtons.checked ){
        conteiner.classList.add("tareaChecked")
    }  else {
        conteiner.classList.add("graffiti")
    }
   
}

conteiner.addEventListener("click", (e) =>{
    if (e.target.classList.contains("delete")){
        conteiner.removeChild(e.target.parentNode)
    }

})

/* let check = document.querySelector("#check")
check.addEventListener("change" , (e)=>{
    let parrafo = document.querySelector("#parraf")
    if (check.checked){
        parrafo.classList.add("tareaChecked")
    }else {
        parrafo.classList.add("tareaNoChecked")
    }
    console.log([check])
}) */
        

