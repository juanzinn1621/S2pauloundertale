function undertale() {
    alert("esse algoritmo calcula quantas vezes seu S2 bateu até o ano de 2024.")
    var ano = prompt("Ano Nascimento.")
    var I = 2024-ano;
    var M = I*12;
    var D = M*30;
    var H = D*24;
    var MIN = H*60;
    var BPM = MIN*70;
    alert("Seu S2 bateu:  " + BPM)  
}

undertale();
// Ouço vozes...

function lerTexto() {
    var mensagem = new SpeechSynthesisUtterance();
    var vozes = speechSynthesis.getVoices();
    mensagem.text = "quem acha que o olavo merece uma ocorrência?";
    mensagem.voice = vozes[1];
    speechSynthesis.speak(mensagem);
}
lerTexto()
