import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("#particules-canvas")!;

const ctx = canvas.getContext("2d")!;

const width = (canvas.width = window.innerWidth);

const height = (canvas.height = window.innerHeight);
ctx.fillStyle = "#ff0000";

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, width, height);

ctx.arc(width / 4, height / 4, 40, 0, Math.PI * 2);


ctx.fillStyle = "#ff0000";

ctx.fillStyle = "#ff0000";

ctx.fill();

ctx.fill();
// Créer un contexte audio
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

// coordonnées de la souris

var positionX;
var positionY;

// récupère les nouvelles coordonnées de la souris quand elle bouge
// puis assigne les nouvelles valeurs de gain et de pitch

document.onmousemove = updatePage;

function updatePage(e) {
  positionX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  positionY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  oscillateur.frequency.value = (positionX / width) * frequenceMax;
  noeudGain.gain.value = (positionY / height) * volumeMax;

  canvasDraw();
}
