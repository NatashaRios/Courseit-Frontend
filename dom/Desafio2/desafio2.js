const input = document.querySelector(".input");
const list = document.querySelector(".list");
const contener = document.querySelector(".contener");

const reciente = [
  "CourseIT",
  "Michis",
  "Computadora",
  "Iphone"
];

const handleInput = () => {
  console.log(input.value);


  let results = reciente.filter ((item) => {
    if (item.includes(input.value)) {
      return true;
    } else {
        return false;
     }
   })

  list.innerHTML = null;

  for (let i = 0; i < results.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = results[i];
  list.appendChild(li);
  }

  console.log(results);
  }

function search() {
  contener.style.display = "block";
  
}



function clean () {
  list.innerText = null;
 }



