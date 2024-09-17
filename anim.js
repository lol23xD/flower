var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "All you gotta do is walk away and pass me by", time: 20 },
  {
    text: "Don't acknowledge my smile when I try to say hello to you, yeah",
    time: 31,
  },
  { text: "And all you gotta do is not answer my calls when", time: 43 },
  { text: "I'm trying to get through", time: 50 },
  { text: "To keep me wondering why, when all I can do is sigh", time: 52 },
  { text: "I just want to touch you", time: 62 },
  { text: "I just want to touch and kiss", time: 63 },
  { text: "And I wish that I could be with you tonight", time: 66 },
  { text: "You give me butterflies inside, inside and I", time: 72 },
  {
    text: "All I gotta say is that I must be dreaming, can't be real",
    time: 75.6,
  },
  { text: "You're not here with me, still I can feel you near me", time: 81 },
  {
    text: "I caress you, let you taste us, just so blissful listen",
    time: 88.8,
  },
  {
    text: "I would give you anything baby, just make my dreams come true",
    time: 94.2,
  },
  { text: "Oh baby you give me butterflies", time: 123.6 },
  { text: "I just want to touch and kiss", time: 125.4 },
  { text: "And I wish that I could be with you tonight", time: 128.4 },
  { text: "You give me butterflies inside, inside and I", time: 133.8 },
  { text: "I just want to touch and kiss", time: 138.6 },
  { text: "And I wish that I could be with you tonight", time: 141 },
  { text: "You give me butterflies inside, inside and I", time: 147 },
  { text: "If you would take my hand, baby I would show you", time: 151.2 },
  { text: "Guide you to the light babe", time: 154.8 },
  {
    text: "If you would be my love, baby I will love you, love you",
    time: 181.8,
  },
  { text: "'Til the end of time", time: 185.4 },
  { text: "I just want to touch and kiss", time: 187.8 },
  { text: "And I wish that I could be with you tonight", time: 190.2 },
  { text: "You give me butterflies inside, inside and I", time: 196.2 },
  { text: "I just want to touch and kiss", time: 200.4 },
  { text: "And I wish that I could be with you tonight", time: 203.4 },
  { text: "You give me butterflies inside, inside and I", time: 209.4 },
  { text: "I just want to touch and kiss", time: 213.6 },
  { text: "And I wish that I could be with you tonight", time: 240 },
  { text: "You give me butterflies inside, inside and I", time: 246.6 },
  { text: "I just want to touch and kiss", time: 250.2 },
  { text: "And I wish that I could be with you tonight", time: 253.2 },
  { text: "You give me butterflies inside, inside and I", time: 259.2 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
