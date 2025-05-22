const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const ampm = document.getElementById("ampm");

function formatotiempo(tiempo){
    return tiempo.toString().padStart(2, "0");
}

function esAmPm(horas){
    return horas >= 12 ? "PM" : "AM";
}

function reloj(){
    const date = new Date();

    let h = date.getHours() % 12 || 12;
    let m = date.getMinutes();
    let s = date.getSeconds();

    hora.textContent = formatotiempo(h);
    minuto.textContent = formatotiempo(m);
    segundo.textContent = formatotiempo(s);
    ampm.textContent = esAmPm(date.getHours());
}

setInterval(reloj, 1000);