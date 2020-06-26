//variables
const input = document.querySelector(".js-input");
const searchContener = document.querySelector(".js-searchContener");
const list = document.querySelector(".js-list");
const none = document.querySelector(".js-none");
const clean = document.querySelector (".js-clean");

//Clickear el input y se abre todo el buscador
input.onclick = function (event) {
  none.style.display = "block";
}

//Apretar enter y se agrega a recientes
input.addEventListener("keyup", function(event){
  if(event.keyCode == 13) {
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = input.value;
    input.value = "";
  }
})

//Apretar borrar todo y se borra los recientes
clean.onclick = function () {
  list.innerText = null;
}

//Clickear afuera y se cierra el buscador
document.addEventListener("click", function(event){
  if(event.target.closest(".js-contener")) return;
  none.style.display = "none";
})