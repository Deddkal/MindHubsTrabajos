const conteiner = document.querySelector("#todolist")
const formulario = document.querySelector("#formulario")
const searchBar = document.getElementById("search_bar")
let idGlobal = []
let globalId = 0
let titulovacio = document.createElement("h2")
if(idGlobal.length===0){
    titulovacio.classList.add("align-self-center")
    titulovacio.innerHTML = "No hay tareas nuevas"
    conteiner.appendChild(titulovacio)
}
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nuevaTarea = {
        id : globalId,
        nombre: formulario[1].value,
        desc: formulario[2].value,
        realizada: false
    }
    idGlobal.push(nuevaTarea)
    //else{
    //conteiner.innerHTML=''
    //}
    
    //idGlobal.forEach(element => {
        crearTarjeta(idGlobal[globalId], conteiner)        
    //});
    globalId ++
    titulovacio.innerHTML = ""
})
function crearTarjeta (datos, donde){
    let tarjeta = document.createElement("div")
    tarjeta.className =`card_conteiner`
    tarjeta.innerHTML=
        `<div class="bg-light">
        <input onClick="marcarRealizada(${datos.id})" id="check${globalId}" type="checkbox" ${datos.realizada? "checked": ""}>
        <label><h3>${datos.nombre}</h3></label>
        </div>
        <p id="parraf${datos.id}">${datos.desc}</p>
        <button id="${datos.id}" class="btn btn-danger delete" onclick="deleted (${datos.id})">Delete</button>`
        
    donde.appendChild(tarjeta)   
    
}

function deleted (idCard){
    idGlobal = idGlobal.filter(element => element.id !== idCard)   
    conteiner.removeChild(document.getElementById(idCard).parentNode)
    globalId--;
    return globalId
}

function marcarRealizada (consId){
    let aux = idGlobal.find(element => 
    element.id == consId)
    if (aux.realizada === true){
        aux.realizada = false
    }else{
        aux.realizada = true
    }
    /* let parrafo = document.getElementById('parraf'+consId)
    if (aux.realizada){
        parrafo.classList.add("tareaChecked")
        parrafo.classList.remove("tareaNoChecked")
    }else {
        parrafo.classList.add("tareaNoChecked")
        parrafo.classList.remove("tareaChecked")
    } */
};

let btn = searchBar[0]
let filter = searchBar[1]
function filtrarRealizado (element){
    if (btn.checked === true){
       element = element.filter( e => e.realizada === true)
       conteiner.innerHTML = " "
       element.forEach(element => {
        crearTarjeta (element, conteiner) 
       });
       
    }else{
       conteiner.innerHTML = ""
       element.forEach(element => {
        crearTarjeta (element, conteiner) 
       });
    }
    
}
searchBar.addEventListener("keyup", e =>{
    e.preventDefault()
    if (btn.checked){
        idGlobal = idGlobal.filter( e => e.realizada === true)
    }
    idGlobal = idGlobal.filter( e => {e.nombre.contains(filter.value)})
})

conteiner.addEventListener("change", (e) =>{
    checkCard(idGlobal, e.target)
        
    })

function checkCard (dato, target){
let parrafo = target.parentNode.parentNode.childNodes[2]
let info = target.parentNode.parentNode.childNodes[0].childNodes[1].checked

    if (info == true){
        console.log(parrafo)
        parrafo.classList.add("tareaChecked")
        parrafo.classList.remove("tareaNoChecked")
        console.log("hola")
    }else {
        parrafo.classList.add ("tareaNoChecked")
        parrafo.classList.remove("tareaChecked")
        
    }
}
    