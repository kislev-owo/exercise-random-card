window.onload = () => {
    // contenedor
    let container = document.createElement("div");
    container.classList.add("container", "pt-5", "d-flex", "justify-content-center");
    // pieza
    let carta = document.createElement("div");
    carta.classList.add("d-flex", "flex-nowrap");
    carta.style.background = "white"
    carta.style.width = "15rem";
    carta.style.height = "20rem";
    carta.style.position = "relative";

    //PINTA arriba y abajo 
    let top = document.createElement("div");
    top.style.position = "absolute";
    top.style.height = "1rem";
    top.style.width = "1rem";
    top.style.left = "50%";
    top.style.top = "50%";
    top.style.transform = "translate(-600%, -800%)";

    let bottom = document.createElement("div");
    bottom.style.position = "absolute";
    bottom.style.height = "1rem";
    bottom.style.width = "1rem";
    bottom.style.left = "50%";
    bottom.style.top = "50%";
    bottom.style.transform = "translate(500%, 700%)";

   //numero que esta en el medio:
    carta.innerHTML = `    
        <div class="w-100 h-100 justify-content-center d-flex align-items-center">
        </div>
    `;
    //Pinta de arriba
    top.innerHTML = `    
       <div class="w-50 h-100 justify-content-center d-flex align-items-center">
        </div>
    `;
    //Pinta de abajo
    bottom.innerHTML = `    
       <div class="w-50 h-100 justify-content-center d-flex align-items-center">
        </div>
    `;
    // Arreglos 
    let numbers = ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"];
    let simbolos = ["♠","♣","♥","♦"];

    for (child of carta.children) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        child.style.height = "10rem";
        child.classList.add(`${numbers[randomIndex]}`);
        child.innerHTML = `<p class="text-center">${numbers[randomIndex]}</p>`;
    } 
    
    for (child of top.children) {
    let randomIndex2 = Math.floor(Math.random() * simbolos.length);
        child.classList.add(`${simbolos[randomIndex2]}`);
        child.innerHTML = `${simbolos[randomIndex2]}`;
    }
    for (child of bottom.children) {
    let randomIndex3 = Math.floor(Math.random() * simbolos.length);
        child.classList.add(`${simbolos[randomIndex3]}`);
        child.innerHTML = `${simbolos[randomIndex3]}`;
    }


    
    
    carta.appendChild(bottom);
    carta.appendChild(top);
    container.appendChild(carta);
    document.body.appendChild(container);
}