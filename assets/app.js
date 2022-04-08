

const AÑADIR = document.getElementById('añadir-tarea');
const TAREA_INPUT = document.getElementById('tarea');
let tareas = [];

const CONTENEDOR = document.getElementById('contenedor');



AÑADIR.addEventListener('click', (event) =>{
   añadirTarea();
});

function añadirTarea(){
    let tarea = TAREA_INPUT.value;
    if(tarea === '' || tarea === null){
        alert('Escribe la tarea antes de añadir :)');
    }else{
        tareas.push(tarea);
        localStorage.setItem('lista-tareas', tareas);
        console.log('tarea añadida: ' + tarea);
        TAREA_INPUT.value = '';


        renderLista();
    }
}
function renderLista(){

    tareas = localStorage.getItem('lista-tareas').split(",");
    CONTENEDOR.innerHTML = '';
    tareas.forEach((tarea, indice)=>{
        CONTENEDOR.innerHTML += `<li>
        <input type="checkbox" name="tarea-${indice}" id="tarea-${indice}">
        <label for="tarea-${indice}">${tarea}</label>
        <button type="button" id="btn-eliminar-${indice}">🗑️</button>
        </li>
        `;
    });
}


if(localStorage.length > 0){
    renderLista();
    console.log('Hay tareas en localStorage');
}else{
    console.log('No hay tareas en localStorage');
}