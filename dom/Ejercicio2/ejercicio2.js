const inputText = document.getElementById("inputText");
const listInput = document.getElementById("listInput");

function add() {
    const list = document.createElement("li");

    listInput.appendChild(list);
    list.innerText = inputText.value;
    inputText.value = "";
}

function clean () {
    listInput.innerText = null;
}


