// Wave-Particle Duality Interactive
const waveParticleCanvas = document.getElementById("waveParticleCanvas");
const waveParticleCtx = waveParticleCanvas.getContext("2d");
let waveMode = false;

function drawWaveParticle() {
    waveParticleCtx.clearRect(0, 0, waveParticleCanvas.width, waveParticleCanvas.height);
    if (waveMode) {
        waveParticleCtx.strokeStyle = "white";
        for (let i = 0; i < waveParticleCanvas.width; i += 20) {
            waveParticleCtx.beginPath();
            waveParticleCtx.moveTo(i, 100);
            waveParticleCtx.lineTo(i, 100 + Math.sin(i * 0.1) * 50);
            waveParticleCtx.stroke();
        }
    } else {
        waveParticleCtx.fillStyle = "red";
        waveParticleCtx.beginPath();
        waveParticleCtx.arc(200, 100, 25, 0, Math.PI * 2);
        waveParticleCtx.fill();
    }
}

function toggleWaveParticleMode() {
    waveMode = !waveMode;
    drawWaveParticle();
}

drawWaveParticle();

// Schrödinger's Cat Interactive
const catCanvas = document.getElementById("catCanvas");
const catCtx = catCanvas.getContext("2d");
let catState = "Superposition";

function drawCat() {
    catCtx.clearRect(0, 0, catCanvas.width, catCanvas.height);
    catCtx.fillStyle = "black";
    catCtx.fillRect(0, 0, catCanvas.width, catCanvas.height);
    catCtx.fillStyle = catState === "Alive" ? "green" : catState === "Dead" ? "red" : "yellow";
    catCtx.beginPath();
    catCtx.arc(200, 100, 40, 0, Math.PI * 2);
    catCtx.fill();
    catCtx.fillStyle = "white";
    catCtx.font = "20px Arial";
    catCtx.fillText(`State: ${catState}`, 150, 180);
}

function toggleObservation() {
    catState = catState === "Superposition" ? (Math.random() > 0.5 ? "Alive" : "Dead") : "Superposition";
    drawCat();
}

drawCat();

// Double-Slit Experiment
const slitCanvas = document.createElement("canvas");
slitCanvas.width = 400;
slitCanvas.height = 200;
document.body.appendChild(slitCanvas);
const slitCtx = slitCanvas.getContext("2d");
let observerMode = false;

function drawDoubleSlit() {
    slitCtx.clearRect(0, 0, slitCanvas.width, slitCanvas.height);
    if (observerMode) {
        slitCtx.fillStyle = "white";
        for (let i = 0; i < slitCanvas.width; i += 20) {
            slitCtx.beginPath();
            slitCtx.arc(i, 100, Math.random() * 10, 0, Math.PI * 2);
            slitCtx.fill();
        }
    } else {
        slitCtx.strokeStyle = "white";
        slitCtx.beginPath();
        for (let i = 0; i < slitCanvas.width; i++) {
            const y = 100 + Math.sin(i * 0.1) * 50;
            slitCtx.lineTo(i, y);
        }
        slitCtx.stroke();
    }
}

function toggleObserverMode() {
    observerMode = !observerMode;
    drawDoubleSlit();
}

drawDoubleSlit();
