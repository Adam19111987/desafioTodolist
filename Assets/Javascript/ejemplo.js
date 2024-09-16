const inputTarea = document.querySelector("#inputCards");
const btnTarea = document.querySelector("#btnagregar");
const totalTareas = document.querySelector("#total");
const realizadasTareas = document.querySelector("#realizadas");

const Tareas = [];

btnTarea.addEventListener("click", () => {
  const nuevaTarea = inputTarea.value;
  if (nuevaTarea.trim() === "") return; // Evitar agregar tareas vacías
  
  const ident = Math.floor(Math.random() * 90) + 10; // Generar ID aleatoria
  Tareas.push({ id: ident, tarea: nuevaTarea });
  inputTarea.value = "";
  
  renderizarTareas(Tareas, "#listID", "#listTarea");
  totalTareas.innerHTML = `${Tareas.length}`;
});

function renderizarTareas(labores, elemenID, elementarea) {
  let elemento = document.querySelector(elemenID);
  let elemenTarea = document.querySelector(elementarea);

  let htmlID = "";
  let htmltarea = "";

  for (let labor of labores) {
    htmlID += `<li class ="listasid">${labor.id}</li>`;
    htmltarea += `<li class ="listasid">
                    ${labor.tarea}
                    <input type="checkbox" class="checkbox-tarea">
                  </li>`;
  }

  elemento.innerHTML = htmlID;
  elemenTarea.innerHTML = htmltarea;
}
