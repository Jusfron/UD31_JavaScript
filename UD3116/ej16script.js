setInterval(actualizarReloj, 1000);

const hora = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarReloj() {
    const date = new Date();
    hora.innerText = date.getHours();
    minutos.innerText = date.getMinutes();
    segundos.innerText = date.getSeconds();
}