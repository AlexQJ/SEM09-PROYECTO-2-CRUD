

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
        CONTENEDOR.innerHTML += `<li class="list-item">
        <input type="checkbox" name="tarea-${indice}" id="tarea-${indice}">
        <label for="tarea-${indice}">${tarea}</label>
        <button type="button" class="btn btn-tarea" id="btn-editar-${indice}" onClick="editarElemento(${indice})">✏️</button>
        <button type="button" class="btn btn-tarea" id="btn-eliminar-${indice}" onClick="eliminarElemento(${indice})">🗑️</button>
        </li>
        `;
    });

    CONTENEDOR.innerHTML += `
        <button type="button" class="btn btn-eliminar-todo" id="btn-eliminar-todo">🗑️ Eliminar todo</button>
    `;
}
function eliminarElemento(i){
    tareas.splice(i, 1);
    localStorage.setItem('lista-tareas', tareas);
    comprobarTareasVacio();
    renderLista();
}


function comprobarTareasVacio(){
    if(localStorage.getItem('lista-tareas') == '' || tareas == [] || tareas.length == 0){
        CONTENEDOR.innerHTML = '';
        localStorage.clear();
        location.reload();
    }

}

function editarElemento(i){
    tareas.splice(i, 1);
    tareas[i] = prompt('Editar elemento', tareas[i]);
    localStorage.setItem('lista-tareas', tareas);
    comprobarTareasVacio();
    renderLista();
    console.log('tarea editada: ' + tareas[i]);
}



