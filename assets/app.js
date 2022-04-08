

const AÑADIR = document.getElementById('añadir-tarea');
const TAREA_INPUT = document.getElementById('tarea');
let tareas = [];
let hayTareas;

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

function renderInicial(){
    if(localStorage.length > 0){
        renderLista();
        hayTareas = true;
        console.log('Hay tareas en localStorage');
        tareas = localStorage.getItem('lista-tareas').split(',');
    }else{
        hayTareas = false;
        console.log('No hay tareas en localStorage');
    }
}


function renderLista(){
    if(localStorage.getItem('lista-tareas') != null){
        tareas = localStorage.getItem('lista-tareas').split(",");
    }
    CONTENEDOR.innerHTML = '';
    tareas.forEach((tarea, indice)=>{
        CONTENEDOR.innerHTML += `<li>
        <input type="checkbox" name="tarea-${indice}" id="tarea-${indice}">
        <label for="tarea-${indice}">${tarea}</label>
        <button type="button" id="btn-eliminar-${indice}" onClick="eliminarElemento(${indice})">🗑️</button>
        </li>
        `;
    });
}
function eliminarElemento(i){
    tareas.splice(i, 1);
    localStorage.setItem('lista-tareas', tareas);
    comprobarTareasVacio();
    renderLista();
}


function comprobarTareasVacio(){
    if(localStorage.getItem('lista-tareas') == ''){
        CONTENEDOR.innerHTML = '';
        localStorage.clear();
    }

}





