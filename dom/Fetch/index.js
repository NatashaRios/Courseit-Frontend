let usuarioEl = document.querySelector(".js-user");
let imgEl = document.querySelector(".js-img");
let nameEl = document.querySelector(".js-name");
let locationEl = document.querySelector(".js-location");
let publicRepoEl = document.querySelector(".js-public-repo");
let followerEl = document.querySelector(".js-follower");
const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
let username = input.value;
const data = document.querySelector(".js-data");
const horror = document.querySelector(".js-horror");


async function getUsuarios() {
  try {
    let username = input.value;
    const responseData = await fetch(`https://api.github.com/users/${username}`);
    const githubData = await responseData.json();
    
    if (githubData.message && githubData.message == "Not Found") {
      data.style.display = "none";
      horror.style.display = "block";
      console.log("El usuario ingresado no existe");
    } else {
      data.style.display = "block";
      horror.style.display = "none";
      input.value = null;
      usuarioEl.innerHTML = githubData.login; 
      usuarioEl.href = `https://github.com/${username}`;
      imgEl.src = githubData.avatar_url;
      nameEl.innerHTML = githubData.name;
      locationEl.innerHTML = githubData.location;
      publicRepoEl.innerHTML = githubData.public_repos;
      followerEl.innerHTML = githubData.followers;
    }
  }
  catch(error) {
    console.log("Ocurrió un error");
    console.log(error);
  }
}

button.addEventListener("click", getUsuarios);

input.addEventListener("keyup", function(event){
  if (event.keyCode == 13) {
    return getUsuarios();
  }
})