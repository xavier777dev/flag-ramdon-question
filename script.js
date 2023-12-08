const inicio = document.querySelector(".inicio");
const h2 = document.querySelector("h2");
const imgBand = document.querySelector(".contendor_img");
const listas = document.querySelector(".cont_listas");
const btn = document.querySelectorAll(".opcn");
const btn1 = document.querySelector("#opc1"); 
const btn2 = document.querySelector("#opc2");
const btn3 = document.querySelector("#opc3");
const img = document.querySelector("img");
const btnReinicio = document.querySelector(".reinicio");
const principal = document.querySelector("main");

cont = 0;

inicio.addEventListener("click", () => {
    h2.style = "display:none"
    inicio.style = "display: none";
    principal.innerHTML = pintarBandera(flag[cont]);
}) 

principal.addEventListener("click", ({target}) => {
    for (let i = 1; i <= 3; i++) {
        if (target.id == `opc${i}` && target.textContent == flag[cont]?.correcta) {
            evaluar();
            return;
        }
    }
})

const flag = band.sort(function () {
    return Math.random() - 0.5;
});

function pintarBandera(bandera) {
    return `
    <button class="reinicio">Deseas volver a Jugar</button>
    <figure class="contendor_img">
        <img src="${bandera.bandera}" alt="banderas">
    </figure>
    <div class="respuestas">
        <ul class="cont_listas">
            <li class="li-letras">
                <span class="letras">A</span>
                <button class="opcn" id="opc1">${bandera.paises[0]}</button>
            </li>
            
            <li class="li-letras">
                <span class="letras">B</span>
                <button class="opcn" id="opc2">${bandera.paises[1]}</button>
            </li>
            <li class="li-letras">
                <span class="letras">C</span>
                <button class="opcn" id="opc3">${bandera.paises[2]}</button>
            </li>
        </ul>
    </div>
    `
}

function evaluar() {
    if ((band.length - 1) == cont) {
        cont = 0;
    } else {
        cont++;
    }
    camBandera(cont);
}

function camBandera(i) {
    principal.childNodes[3].childNodes[1].src =  band[i].bandera;
    principal.childNodes[5].childNodes[1].childNodes[1].childNodes[3].textContent = band[i].paises[0];
    principal.childNodes[5].childNodes[1].childNodes[3].childNodes[3].textContent = band[i].paises[1];
    principal.childNodes[5].childNodes[1].childNodes[5].childNodes[3].textContent = band[i].paises[2];
}
