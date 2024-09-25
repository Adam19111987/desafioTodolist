const inputTarea = document.querySelector("#inputCards");
const btnTarea = document.querySelector("#btnagregar");
const totalTareas = document.querySelector("#total");
const tareasRealizdas = document.querySelector("#realizadas");

const Tareas = [];

btnTarea.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  const ident = Math.floor(Math.random() * 90) + 10;
  Tareas.push({ id: ident, tarea: nuevaTarea, realizadas: false });
  inputTarea.value = "";
  renderizarTareas(Tareas, "#listID", "#listTarea", "#inputcheck");
  

});

function renderizarTareas(labores, elemenID, elementarea, elementchech) {
  let elementoID = document.querySelector(`${elemenID}`);
  let elementoTarea = document.querySelector(`${elementarea}`);
  let elementocheck = document.querySelector(`${elementchech}`);

  let htmlID = "";
  let htmlTarea = "";
  let htmlCheck = "";
    

 
  labores.forEach((labor, index) =>{
  htmlID += `<li class="listaid">${labor.id}</li>`;
  htmlTarea += `<li class="listatarea">${labor.tarea}</li>`;
  htmlCheck += `<div class = "bntcheks"
  ><input class="activarCheck"  type="checkbox" data-index="${index}" ${labor.completada ? 'checked' : ''}><i onclick="borrar(${labor.id})" class="fa-solid fa-x btnX"></i></div>`;
 
 });

 totalTareas.innerHTML = Tareas.length === 0 ? '0' : `${Tareas.length}`;

 elementoID.innerHTML = htmlID;
 elementoTarea.innerHTML = htmlTarea;
 elementocheck.innerHTML = htmlCheck;

 let checkboxes = document.querySelectorAll('.activarCheck');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
      const index = event.target.getAttribute("data-index");
      Tareas[index].completada = event.target.checked;
      actualizarTareasRealizadas();
     })
  });
 
 }

 function borrar(id) {
  const index = Tareas.findIndex((ele) => ele.id === id);
  if (index !== -1) {
    Tareas.splice(index, 1);
    renderizarTareas(Tareas, "#listID", "#listTarea", "#inputcheck");

  
    
  }
}
  



function actualizarTareasRealizadas() {
  const taksreadys = Tareas.filter((tarea) => tarea.completada).length;
  tareasRealizdas.innerHTML = `${taksreadys}`;
}
