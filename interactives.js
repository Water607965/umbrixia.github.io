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

// Schrödinger's Cat Interactive
const catCanvas = document.getElementById("catCanvas");
const catCtx = catCanvas.getContext("2d");
let catState = "Superposition";

function drawCatState() {
    catCtx.clearRect(0, 0, catCanvas.width, catCanvas.height);
    catCtx.fillStyle = "black";
    catCtx.fillRect(0, 0, catCanvas.width, catCanvas.height);

    if (catState === "Alive") {
        catCtx.fillStyle = "green";
    } else if (catState === "Dead") {
        catCtx.fillStyle = "red";
    } else {
        catCtx.fillStyle = "yellow";
    }

    catCtx.beginPath();
    catCtx.arc(200, 100, 50, 0, Math.PI * 2);
    catCtx.fill();

    catCtx.fillStyle = "white";
    catCtx.font = "20px Arial";
    catCtx.fillText(`State: ${catState}`, 140, 180);
}

function toggleObservation() {
    if (catState === "Superposition") {
        catState = Math.random() > 0.5 ? "Alive" : "Dead";
    } else {
        catState = "Superposition";
    }
    drawCatState();
}

drawCatState();

// Quantum Entanglement Interactive
const entanglementCanvas = document.createElement("canvas");
entanglementCanvas.width = 400;
entanglementCanvas.height = 200;
document.body.appendChild(entanglementCanvas);
const entanglementCtx = entanglementCanvas.getContext("2d");
let entanglementState = true;

function drawEntanglement() {
    entanglementCtx.clearRect(0, 0, entanglementCanvas.width, entanglementCanvas.height);

    entanglementCtx.strokeStyle = entanglementState ? "blue" : "green";
    entanglementCtx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        entanglementCtx.beginPath();
        entanglementCtx.moveTo(50 + i * 60, 50);
        entanglementCtx.lineTo(100 + i * 60, 150);
        entanglementCtx.stroke();
    }
}

function toggleEntanglement() {
    entanglementState = !entanglementState;
    drawEntanglement();
}

drawEntanglement();

// Quantum Tunneling Interactive
const tunnelingCanvas = document.createElement("canvas");
tunnelingCanvas.width = 400;
tunnelingCanvas.height = 200;
document.body.appendChild(tunnelingCanvas);
const tunnelingCtx = tunnelingCanvas.getContext("2d");
let tunnelingActive = false;

function drawTunneling() {
    tunnelingCtx.clearRect(0, 0, tunnelingCanvas.width, tunnelingCanvas.height);

    tunnelingCtx.fillStyle = "gray";
    tunnelingCtx.fillRect(150, 50, 100, 100);

    tunnelingCtx.fillStyle = tunnelingActive ? "yellow" : "red";
    tunnelingCtx.beginPath();
    tunnelingCtx.arc(100, 100, 20, 0, Math.PI * 2);
    tunnelingCtx.fill();

    if (tunnelingActive) {
        tunnelingCtx.beginPath();
        tunnelingCtx.arc(300, 100, 20, 0, Math.PI * 2);
        tunnelingCtx.fill();
    }
}

function toggleTunneling() {
    tunnelingActive = !tunnelingActive;
    drawTunneling();
}

drawTunneling();
