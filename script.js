function adjustValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    value = Math.max(0, value + delta);
    input.value = value;
}

function calcularPontuacao() {
    const intersecao = parseInt(document.getElementById('intersecao').value) * 10;
    const gangorra = parseInt(document.getElementById('gangorra').value) * 20;
    const obstaculo = parseInt(document.getElementById('obstaculo').value) * 20;
    const gap = parseInt(document.getElementById('gap').value) * 10;
    const rampa = parseInt(document.getElementById('rampa').value) * 10;
    const lombada = parseInt(document.getElementById('lombada').value) * 10;
    const passagem = parseInt(document.getElementById('passagem').value) * 0;
    const tentativa1 = parseInt(document.getElementById('tentativa1').value) * 5;
    const tentativa2 = parseInt(document.getElementById('tentativa2').value) * 3;
    const tentativa3 = parseInt(document.getElementById('tentativa3').value) * 1;
    const chegada = parseInt(document.getElementById('chegada').value) * 60;
    const vivaResgate = parseInt(document.getElementById('viva_resgate').value) * 1.3;
    const invertidaResgate = parseInt(document.getElementById('invertida_resgate').value) * 1.1;
    const partida = parseInt(document.getElementById('partida').value) * 5;

    const total = intersecao + gangorra + obstaculo + gap + rampa + lombada + passagem + tentativa1 + tentativa2 + tentativa3 + chegada + vivaResgate + invertidaResgate + partida;

    document.getElementById('result').innerText = 'Pontuação Total: ' + total.toFixed(2) + ' pontos';
}

let timerInterval;
let time = 300; // 5 minutes in seconds

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    time = 300; // reset to 5 minutes
    document.getElementById('timerDisplay').innerText = formatTime(time);
}

function updateTimer() {
    if (time <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        return;
    }
    time--;
    document.getElementById('timerDisplay').innerText = formatTime(time);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timerDisplay').innerText = formatTime(time);
});
