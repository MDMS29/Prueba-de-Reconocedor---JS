const btnStart = document.getElementById('btnStartRecord');
const btnStop = document.getElementById('btnStopRecord');
const btnRepro = document.getElementById('playText');
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition()
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = e => {
    const results = e.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase
}

recognition.onend = (e) => {
    console.log('dejo de escuchar')
}
recognition.onerror = (e) => {
    console.log(e.error)
}

btnStart.addEventListener('click', () =>{
    recognition.start();
})
btnStop.addEventListener('click', () =>{
    recognition.abort();
});

btnRepro.addEventListener('click', () =>{
    leerTexto(texto.value)
})

function leerTexto(texto){
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}