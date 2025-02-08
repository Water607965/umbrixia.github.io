// Wave-Particle Duality Interactive
const waveParticleCanvas = document.getElementById("waveParticleCanvas");
const waveParticleCtx = waveParticleCanvas.getContext("2d");
let waveMode = true;

function drawWave() {
    waveParticleCtx.clearRect(0, 0, waveParticleCanvas.width, waveParticleCanvas.height);
    waveParticleCtx.strokeStyle = "white";
    waveParticleCtx.lineWidth = 2;
    for (let x = 0; x < waveParticleCanvas.width; x += 5) {
        const y = 100 + Math.sin((x + Date.now() / 100) * 0.1) * 40;
        waveParticleCtx.beginPath();
        waveParticleCtx.arc(x, y, 2, 0, Math.PI * 2);
        waveParticleCtx.fillStyle = "yellow";
        waveParticleCtx.fill();
    }
}

function drawParticle() {
    waveParticleCtx.clearRect(0, 0, waveParticleCanvas.width, waveParticleCanvas.height);
    waveParticleCtx.fillStyle = "red";
    waveParticleCtx.beginPath();
    waveParticleCtx.arc(200, 100, 20, 0, Math.PI * 2);
    waveParticleCtx.fill();
}

function toggleWaveParticleMode() {
    waveMode = !waveMode;
}

function animateWaveParticle() {
    if (waveMode) {
        drawWave();
    } else {
        drawParticle();
    }
    requestAnimationFrame(animateWaveParticle);
}

animateWaveParticle();

// Double-Slit Experiment Interactive
const doubleSlitCanvas = document.getElementById("doubleSlitCanvas");
const doubleSlitCtx = doubleSlitCanvas.getContext("2d");
let observerEnabled = false;

function drawInterference() {
    doubleSlitCtx.clearRect(0, 0, doubleSlitCanvas.width, doubleSlitCanvas.height);
    for (let i = 0; i < doubleSlitCanvas.width; i += 10) {
        const intensity = Math.sin(i * 0.1) ** 2 * 255;
        doubleSlitCtx.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`;
        doubleSlitCtx.fillRect(i, 0, 10, doubleSlitCanvas.height);
    }
}

function drawParticles() {
    doubleSlitCtx.clearRect(0, 0, doubleSlitCanvas.width, doubleSlitCanvas.height);
    doubleSlitCtx.fillStyle = "blue";
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * doubleSlitCanvas.width;
        const y = Math.random() * doubleSlitCanvas.height;
        doubleSlitCtx.beginPath();
        doubleSlitCtx.arc(x, y, 2, 0, Math.PI * 2);
        doubleSlitCtx.fill();
    }
}

function toggleObserverMode() {
    observerEnabled = !observerEnabled;
}

function animateDoubleSlit() {
    if (observerEnabled) {
        drawParticles();
    } else {
        drawInterference();
    }
    requestAnimationFrame(animateDoubleSlit);
}

animateDoubleSlit();
