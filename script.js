document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Yay! I knew you'd say yes! ❤️";

    // Fire confetti 🎉
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

