

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
  renderizarTareas(Tareas, "#listID", "#listTarea", "#inputcheck");
  totalTareas.innerHTML = `${Tareas.length}`;
});

function renderizarTareas(labores, elemenID, elementarea,elementchech) {
  let elemento = document.querySelector(`${elemenID}`);
  let  elemenTarea = document.querySelector(`${elementarea}`);
  let elementchek = document.querySelector(`${elementchech}`)
  
 
  let htmlID = "";
  let htmltarea = "";
  let htmlchek = "";
  for (labor of labores) {
    htmlID += `<li class ="listaid">${labor.id}</li> `;
    htmltarea += `<li class ="listascard">${labor.tarea}</li>`;
    htmlchek += ` <input type="checkbox">`
  }
  elemento.innerHTML = htmlID;
  elemenTarea.innerHTML = htmltarea;
  elementchek.innerHTML = htmlchek;
}


function borrarid (Tareas){
   
}