const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minEl = document.getElementById("mins")
const secEl = document.getElementById("sec")


function atualizarContador() {
    const dataInicio = new Date('September 12, 2023 00:00:00').getTime();
    const agora = new Date().getTime();

    const diferenca = agora - dataInicio;

    const sec = Math.floor((diferenca / 1000) % 60);
    const mins = Math.floor((diferenca / (1000 * 60)) % 60);
    const hours = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = mins;
    secEl.innerHTML = sec;
}

setInterval(atualizarContador, 1000); // Atualiza a cada segundo