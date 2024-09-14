const inputTarea = document.querySelector("#inputCards");
const btnTarea = document.querySelector('#btnagregar');
const totalTareas = document.querySelector('#total');
const tareasRealizdas = document.querySelector('#realizadas');

const Tareas = [];

btnTarea.addEventListener('click', () => {
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea) {
        const ident = Math.floor(Math.random() * 90) + 10;
        Tareas.push({ id: ident, tarea: nuevaTarea });
        inputTarea.value = "";
        renderizarTareas(Tareas, "#listID", "#listTarea");
    }
});

function renderizarTareas(labores, elemenID, elemenTarea) {
    let elementoID = document.querySelector(elemenID);
    let elementoTarea = document.querySelector(elemenTarea);

    let htmlID = "";
    let htmlTarea = "";

    // Iteramos sobre las tareas y agregamos tanto el ID como la tarea
    for (let labor of labores) {
        htmlID += `<li class="listasid">${labor.id}</li>`;
        htmlTarea += `<li class="listasTareas">${labor.tarea}</li>`;
    }

    // Actualizamos el innerHTML de ambos elementos
    elementoID.innerHTML = htmlID;
    elementoTarea.innerHTML = htmlTarea;
}
