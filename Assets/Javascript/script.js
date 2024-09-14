// const chequear = document.querySelector('#chequar');

// chequear.addEventListener('change', () =>{
//     console.log(chequear.checked);
// } )

const inputTarea = document.querySelector("#inputCards");
const btnTarea = document.querySelector("#btnagregar");
const totalTareas = document.querySelector("#total");
const tareasRealizdas = document.querySelector("#realizadas");

const Tareas = [];

btnTarea.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  const ident = Math.floor(Math.random() * 90) + 10;
  Tareas.push({ id: ident, tarea: nuevaTarea });
  inputTarea.value = "";
  renderizarTareas(Tareas, "#listID", "#listTarea");
  totalTareas.innerHTML = `${Tareas.length}`;
});

function renderizarTareas(labores, elemenID, elementarea) {
  let elemento = document.querySelector(`${elemenID}`);
  let elemenTarea = document.querySelector(`${elementarea}`);
  let htmlID = "";
  let htmltarea = "";
  for (labor of labores) {
    htmlID += `<li class ="listasid">${labor.id}</li> `;
    htmltarea += `<li class ="listasid">${labor.tarea}</li> `;
  }
  elemento.innerHTML = htmlID;
  elemenTarea.innerHTML = htmltarea;
}
