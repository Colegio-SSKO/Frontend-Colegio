
let nameEl = document.querySelector(".profilepic-card .name-container h5");

if(nameEl.textContent.length>=25){
    nameEl.innerHTML = nameEl.textContent.slice(0,25) + "..."
}
